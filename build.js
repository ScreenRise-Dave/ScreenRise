const fs = require("fs");
const path = require("path");

const docsDir = path.join(__dirname, "documentation");
const indexFile = path.join(docsDir, "index.html");

console.log("========================================");
console.log("DOCUMENTATION BUILD SCRIPT IS RUNNING");
console.log("========================================");

function findDocuments(dir) {
    let results = [];

    if (!fs.existsSync(dir)) {
        return results;
    }

    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, item.name);

        if (item.isDirectory()) {
            results = results.concat(findDocuments(fullPath));
        } else {
            const ext = path.extname(item.name).toLowerCase();

            if (ext === ".md" || ext === ".docx") {
                results.push(fullPath);
            }
        }
    }

    return results;
}

const files = findDocuments(docsDir).sort();

console.log(`Found ${files.length} documentation files.`);

const links = files.map(file => {
    const relativePath = path.relative(docsDir, file).split(path.sep).join("/");
    const name = path.basename(file, path.extname(file))
        .replace(/[-_]/g, " ");

    const displayName = name.replace(/\b\w/g, c => c.toUpperCase());

    return `
        <li>
            <a href="${relativePath}" download>
                ${displayName}
            </a>
        </li>
    `;
}).join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Documentation</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 40px auto;
            padding: 0 20px;
            color: #222;
        }

        h1 {
            margin-bottom: 30px;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        li {
            margin: 10px 0;
        }

        a {
            display: block;
            padding: 14px 18px;
            border: 1px solid #ddd;
            border-radius: 6px;
            text-decoration: none;
            color: #333;
        }

        a:hover {
            background: #f5f5f5;
        }
    </style>
</head>

<body>

    <h1>Documentation</h1>

    <ul>
        ${links || "<li>No documentation files found.</li>"}
    </ul>

</body>
</html>
`;

fs.writeFileSync(indexFile, html);

console.log("Generated documentation/index.html");
console.log("========================================");

