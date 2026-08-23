from pathlib import Path
from html import escape

DOCS_DIR = Path("documentation")
INDEX_FILE = DOCS_DIR / "index.html"

# File types we want to show
ALLOWED_EXTENSIONS = {".docx", ".md", ".pdf"}

# Friendly names for file extensions
FILE_TYPES = {
    ".docx": "Word document",
    ".md": "Markdown document",
    ".pdf": "PDF document",
}


def display_name(path):
    """Turn a filename into a more readable title."""
    name = path.stem.replace("-", " ").replace("_", " ")
    return " ".join(word.capitalize() for word in name.split())


def generate_index():
    if not DOCS_DIR.exists():
        print("No documentation directory found.")
        return

    files = sorted(
        [
            path
            for path in DOCS_DIR.rglob("*")
            if path.is_file()
            and path.suffix.lower() in ALLOWED_EXTENSIONS
            and path.name != "index.html"
        ],
        key=lambda p: str(p).lower(),
    )

    links = []

    for path in files:
        relative_path = path.relative_to(DOCS_DIR).as_posix()
        name = display_name(path)
        file_type = FILE_TYPES.get(path.suffix.lower(), "Document")

        links.append(
            f"""
            <li>
                <a href="{escape(relative_path)}" download>
                    <span class="document-name">{escape(name)}</span>
                    <span class="document-type">{escape(file_type)}</span>
                </a>
            </li>
            """
        )

    if links:
        document_list = "\n".join(links)
    else:
        document_list = """
        <li class="empty">
            No documents are currently available.
        </li>
        """

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Documentation</title>

    <style>
        body {{
            font-family: system-ui, -apple-system, BlinkMacSystemFont,
                         "Segoe UI", sans-serif;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            color: #222;
            background: #fff;
        }}

        h1 {{
            margin-bottom: 10px;
        }}

        .intro {{
            color: #666;
            margin-bottom: 30px;
        }}

        ul {{
            list-style: none;
            padding: 0;
            margin: 0;
        }}

        li {{
            margin-bottom: 10px;
        }}

        li a {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            padding: 16px 18px;
            border: 1px solid #ddd;
            border-radius: 8px;
            text-decoration: none;
            color: #222;
            transition: background 0.15s, border-color 0.15s;
        }}

        li a:hover {{
            background: #f7f7f7;
            border-color: #aaa;
        }}

        .document-name {{
            font-weight: 600;
        }}

        .document-type {{
            color: #777;
            font-size: 0.9rem;
            white-space: nowrap;
        }}

        .empty {{
            color: #777;
            padding: 20px 0;
        }}

        @media (max-width: 600px) {{
            li a {{
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
            }}
        }}
    </style>
</head>

<body>

    <h1>Documentation</h1>

    <p class="intro">
        Documents and reference material.
    </p>

    <ul>
        {document_list}
    </ul>

</body>
</html>
"""

    INDEX_FILE.write_text(html, encoding="utf-8")

    print(f"Generated {INDEX_FILE}")
    print(f"Found {len(files)} document(s).")


if __name__ == "__main__":
    generate_index()
