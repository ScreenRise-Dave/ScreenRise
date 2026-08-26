const fs = require("fs");
const path = require("path");

const docsDir = path.join(__dirname, "documentation");
const indexFile = path.join(docsDir, "index.html");

console.log("========================================");
console.log("DOCUMENTATION BUILD SCRIPT IS RUNNING");
console.log("========================================");

function displayName(name) {
    return name
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, c => c.toUpperCase());
}

function buildTree(dir, relativeDir = "") {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
        .filter(entry => entry.name !== "index.html")
        .sort((a, b) => {
            // Folders first, then files
            if (a.isDirectory() && !b.isDirectory()) return -1;
            if (!a.isDirectory() && b.isDirectory()) return 1;
            return a.name.localeCompare(b.name);
        });

    let html = "";

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativePath = relativeDir
            ? `${relativeDir}/${entry.name}`
            : entry.name;

        if (entry.isDirectory()) {
            const contents = buildTree(fullPath, relativePath);

            // Only show folders that contain documents/subfolders
            if (contents.trim()) {
                html += `
                    <li class="folder">
                        <div class="folder-name">
                            📁 ${displayName(entry.name)}
                        </div>
                        <ul>
                            ${contents}
                        </ul>
                    </li>
                `;
            }

        } else {
            const extension = path.extname(entry.name).toLowerCase();

            // Only include documentation file types
            let documentType;

            switch (extension) {
                case ".docx":
                     documentType = "Word document";
                     break;
                case ".pdf":
                     documentType = "PDF document";
                     break;
                default:
                     documentType = "Markdown document";
            }

            const documentType =
                extension === ".docx"
                    ? "Word document"
                    : "Markdown document";

            html += `
                <li class="file">
                    <a href="${relativePath}" download>
                        <span class="file-name">
                            📄 ${displayName(entry.name)}
                        </span>
                        <span class="file-type">
                            ${documentType}
                        </span>
                    </a>
                </li>
            `;
        }
    }

    return html;
}

if (!fs.existsSync(docsDir)) {
    console.error("ERROR: documentation directory not found.");
    process.exit(1);
}

const documentTree = buildTree(docsDir);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Documentation</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1000px;
            margin: 40px auto;
            padding: 0 20px;
            color: #222;
            line-height: 1.5;
        }

        h1 {
            margin-bottom: 30px;
        }

        ul {
            list-style: none;
            padding-left: 0;
        }

        .folder > ul {
            padding-left: 28px;
            margin-top: 5px;
        }

        .folder {
            margin-bottom: 18px;
        }

        .folder-name {
            font-size: 1.1rem;
            font-weight: bold;
            padding: 8px 0;
        }

        .file {
            margin: 6px 0;
        }

        .file a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            padding: 10px 14px;
            border: 1px solid #ddd;
            border-radius: 6px;
            text-decoration: none;
            color: #333;
        }

        .file a:hover {
            background: #f5f5f5;
            border-color: #bbb;
        }

        .file-name {
            font-weight: 500;
        }

        .file-type {
            color: #777;
            font-size: 0.85rem;
            white-space: nowrap;
        }

        .empty {
            color: #777;
        }

        @media (max-width: 600px) {
            body {
                margin: 20px auto;
            }

            .file a {
                flex-direction: column;
                align-items: flex-start;
                gap: 3px;
            }
        }
    </style>
</head>

<body>

    <h1>Documentation</h1>

    <ul>
        ${
            documentTree ||
            '<li class="empty">No documentation files found.</li>'
        }
    </ul>

</body>
</html>
`;

fs.writeFileSync(indexFile, html, "utf8");

console.log("Documentation structure generated.");
console.log("Generated: documentation/index.html");
console.log("========================================");

