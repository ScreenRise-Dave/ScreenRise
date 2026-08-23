from pathlib import Path
from html import escape

print("========================================")
print("DOCUMENTATION BUILD SCRIPT IS RUNNING")
print("========================================")

docs = Path("documentation")

files = sorted(
    [
        f for f in docs.rglob("*")
        if f.is_file()
        and f.suffix.lower() in [".md", ".docx"]
        and f.name != "index.html"
    ],
    key=lambda f: str(f).lower()
)

print(f"Found {len(files)} documentation files")

items = []

for file in files:
    relative = file.relative_to(docs).as_posix()
    name = file.stem.replace("-", " ").replace("_", " ")

    items.append(
        f'<li><a href="{escape(relative)}" download>{escape(name)}</a></li>'
    )

html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentation</title>
</head>
<body>

<h1>Documentation</h1>

<ul>
    {"".join(items) if items else "<li>No documents found.</li>"}
</ul>

</body>
</html>
"""

(docs / "index.html").write_text(html, encoding="utf-8")

print("Generated documentation/index.html")
print("========================================")
