# ScreenRise Films Page Administration Guide

## Purpose

The Films page is the showcase for ScreenRise productions.

It provides visibility of current, future and completed projects while
demonstrating the opportunities ScreenRise creates for emerging actors,
writers, directors and crew.

Each production should be represented using a standard Film Card.

New productions should always be added by copying an existing Film Card
rather than creating new layouts.

---

## Film Lifecycle

Films should generally progress through the following stages:

1. Development
2. Pre-Production
3. Production
4. Post-Production
5. Released
6. Festival Circuit
7. Archived

Status values shown on Film Cards should reflect the current stage.

---

## Adding A New Film

1. Open `films.html`
2. Locate the **Current Productions** section.
3. Copy an existing Film Card.
4. Paste the Film Card immediately below the most recent project.
5. Update the title, status, synopsis and credits.
6. Add a poster and trailer if available.
7. Save and test the page.

---

## Film Card Template

```html
<div class="film-card">

    images/example-poster.jpg

    <h3>Film Title</h3>

    <p><strong>Status:</strong> In Development</p>

    <p>
        Brief synopsis goes here.
    </p>

    <p>
        <strong>Director:</strong> Name
    </p>

    <p>
        <strong>Cast:</strong> To Be Announced
    </p>

    <p>
        <strong>Festival Targets:</strong>
        Liverpool, Leeds, Manchester
    </p>

    <p>
        <a href="#">IMDb</a> |
        <a href="#">Trailer</a> |
        <a href="#">Gallery</a>
    </p>

    <div class="trailer-container">

        https://www.youtube.com/embed/VIDEO_ID
        </iframe>

    </div>

</div>
```

## Sample Film Card (Example Only)

The example below demonstrates a fully populated Film Card including a poster, IMDb link, trailer link, gallery link and embedded trailer.

```html
<div class="film-card">

    <img src="images/the-last-train-poster.jpg"
         alt="The Last Train Poster"
         class="film-poster">

    <h3>The Last Train</h3>

    <p><strong>Status:</strong> Released</p>

    <p>
        A short drama exploring friendship, loss and second chances
        on the final train home.
    </p>

    <p>
        <strong>Director:</strong> Jane Smith
    </p>

    <p>
        <strong>Cast:</strong> John Brown, Sarah Green
    </p>

    <p>
        <strong>Festival Selections:</strong>
        Liverpool, Leeds and Manchester
    </p>

    <p>
        <a href="https://www.imdb.com/title/tt0111161/"
           target="_blank">IMDb</a>
        |

        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="The Last Train Trailer"
            allowfullscreen-|----------|
| film-poster | Displays the poster image |
| h3 | Film title |
| Status | Current lifecycle stage |
| Synopsis | Brief description of the film |
| Director | Named production lead |
| Cast | Principal cast members |
| Festival Selections | Festivals, awards or screenings |
| IMDb Link | External IMDb page |
| Trailer Link | Opens trailer in YouTube |
| Gallery Link | Opens local gallery page |
| Embedded Trailer | Plays trailer directly within the card |

### Notes

- External links should normally use `target="_blank"` so that they open in a new browser tab.
- Posters should be stored within the `images` folder.
- Trailers should generally be hosted on YouTube and embedded rather than uploaded directly to the website.
- The Gallery link is optional and only required if a dedicated gallery page exists.


---

## Film Status Values

| Status | Meaning |
|----------|----------|
| Development | Concept, script or planning stage |
| Pre-Production | Casting, crew recruitment and preparation |
| Production | Filming is underway |
| Post-Production | Editing and finishing work underway |
| Released | Film is publicly available |
| Archived | Retained for historical reference |

---

## Managing Posters

All posters should be stored in the `images` folder.

Folder structure:

```text
images/
    film-one-poster.jpg
    film-two-poster.jpg
    film-three-poster.jpg
```

Example:

```html
images/film-one-poster.jpg
```

Poster naming convention:

```text
film-title-poster.jpg
```

Examples:

```text
the-last-train-poster.jpg
city-lights-poster.jpg
voices-poster.jpg
```

---

## Managing Trailers

Trailers should be hosted on YouTube.

Do NOT upload video files directly to the website unless absolutely necessary.

Embed trailers using:

```html
<div class="trailer-container">

    https://www.youtube.com/embed/VIDEO_ID
    </iframe>

</div>
```

To find the VIDEO_ID:

Example YouTube URL:

```text
https://www.youtube.com/watch?v=abcd1234
```

VIDEO_ID:

```text
abcd1234
```

Embed URL:

```text
https://www.youtube.com/embed/abcd1234
```

---

## Film Card Links

Film Cards may contain links to supporting resources.

### IMDb

Use this when the film has an IMDb entry.

Example:

```html
https://www.imdb.com/title/tt12345678/
   IMDb
</a>
```

### Trailer

Use this when a public trailer is available.

Example:

```html
https://www.youtube.com/watch?v=abcd1234
   Trailer
</a>
```

### Gallery

Use this when a dedicated gallery page exists.

Example:

```html
gallery-the-last-train.html
   Gallery
</a>
```

A gallery page may contain:

- Production photographs
- Behind-the-scenes images
- Posters
- Marketing assets
- Festival photographs
- Award announcements

---

## Films Without Links

When a film is still in development, it is acceptable to use:

```html
<p>
    IMDb • Trailer • Gallery
</p>
```

or

```html
<p>
    <em>Links will be added when available.</em>
</p>
```

Avoid publishing links that do not work.

---

## Ordering Films

Display films in the following order:

1. Current Productions
2. Films In Production
3. Recently Released Films
4. Archived Productions

The most active or newest projects should appear first.

---

## Design Principles

- Use Film Cards consistently
- Keep synopsis text concise
- Use one poster per film
- Host trailers on YouTube
- Keep layouts consistent
- Do not create custom card layouts per film
- Present ScreenRise professionally
- Prioritise readability over visual complexity

---

## ScreenRise Principle

Film production is our mechanism.

Creating opportunity is our purpose.
