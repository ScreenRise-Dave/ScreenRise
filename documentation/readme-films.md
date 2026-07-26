<div class="container">

    <h1>Films Page Administration Guide</h1>

    <p>
        This document explains how to maintain and update the
        ScreenRise Films page as new productions are announced,
        developed and released.
    </p>

    <h2>Purpose Of The Films Page</h2>

    <p>
        The Films page is the showcase for ScreenRise productions.
        It provides visibility of current, future and completed
        projects, while demonstrating the opportunities ScreenRise
        creates for emerging talent.
    </p>

    <p>
        Each film is represented by a Film Card. New productions
        should always be added by copying an existing Film Card
        rather than creating new page layouts.
    </p>

    <h2>Adding A New Film</h2>

    <ol>
        <li>Open <strong>films.html</strong>.</li>
        <li>Locate the Current Productions section.</li>
        <li>Copy an existing Film Card.</li>
        <li>Paste the Film Card immediately below the most recent project.</li>
        <li>Update the title, status, synopsis and other information.</li>
        <li>Save the page and test locally.</li>
    </ol>

    <h2>Film Card Template</h2>

<pre>
&lt;div class="film-card"&gt;

    &lt;img src="images/example-poster.jpg"
         alt="Film Poster"
         class="film-poster"&gt;

    &lt;h3&gt;Film Title&lt;/h3&gt;

    &lt;p&gt;&lt;strong&gt;Status:&lt;/strong&gt; In Development&lt;/p&gt;

    &lt;p&gt;
        Brief synopsis goes here.
    &lt;/p&gt;

    &lt;p&gt;
        &lt;strong&gt;Director:&lt;/strong&gt; Name
    &lt;/p&gt;

    &lt;p&gt;
        &lt;strong&gt;Cast:&lt;/strong&gt; To Be Announced
    &lt;/p&gt;

    &lt;p&gt;
        &lt;strong&gt;Festival Targets:&lt;/strong&gt; Liverpool, Leeds
    &lt;/p&gt;

    &lt;p&gt;
        &lt;a href="#"&gt;IMDb&lt;/a&gt; |
        &lt;a href="#"&gt;Trailer&lt;/a&gt; |
        &lt;a href="#"&gt;Gallery&lt;/a&gt;
    &lt;/p&gt;

&lt;/div&gt;
</pre>

    <h2>Film Status Values</h2>

    <ul>
        <li><strong>Development</strong> – Concept, script or planning stage.</li>
        <li><strong>Pre-Production</strong> – Casting, crew recruitment and preparation.</li>
        <li><strong>Production</strong> – Principal photography is underway.</li>
        <li><strong>Post-Production</strong> – Editing and finishing work is underway.</li>
        <li><strong>Released</strong> – Film is complete and publicly available.</li>
    </ul>

    <h2>Managing Posters</h2>

    <p>
        All film posters should be stored within the
        <strong>images</strong> folder.
    </p>

<pre>
images/
    film-one-poster.jpg
    film-two-poster.jpg
    film-three-poster.jpg
</pre>

    <p>
        Reference the poster within the Film Card using:
    </p>

<pre>
&lt;img src="images/film-one-poster.jpg"
     alt="Film One Poster"
     class="film-poster"&gt;
</pre>

    <h2>Managing Trailers</h2>

    <p>
        Trailers should be uploaded to YouTube and embedded
        within a Film Card.
    </p>

<pre>
&lt;div class="trailer-container"&gt;

    &lt;iframe
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="Film Trailer"
        allowfullscreen&gt;
    &lt;/iframe&gt;

&lt;/div&gt;
</pre>

    <p>
        Do not upload video files directly to the website.
        Use YouTube hosting and embed the trailer instead.
    </p>

    <h2>Ordering Films</h2>

    <p>
        Films should normally be displayed in the following order:
    </p>

    <ol>
        <li>Current Productions</li>
        <li>Films In Production</li>
        <li>Recently Released Films</li>
        <li>Archive Productions</li>
    </ol>

    <p>
        The newest and most active projects should always appear first.
    </p>

    <h2>Design Principles</h2>

    <ul>
        <li>Do not create custom layouts for individual films.</li>
        <li>Use Film Cards consistently.</li>
        <li>Keep synopsis text concise.</li>
        <li>Use posters where available.</li>
        <li>Embed trailers using YouTube.</li>
        <li>Present ScreenRise professionally and consistently.</li>
    </ul>

</div>
