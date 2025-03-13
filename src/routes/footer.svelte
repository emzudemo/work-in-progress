<script lang="ts">
</script>

<footer class="col-3-10 nav">
    <ul>
        <li><a href="https://mastodon.social/@emzudemo">Mastodon</a></li>
        <li><a href="https://www.instagram.com/emzudemo/">Instagram</a></li>
        <li><a href="https://bsky.app/profile/emzudemo.bsky.social">Bluesky</a></li>
    </ul>
	<p><a href="/imprint">Imprint</a> © {new Date().getFullYear()}</p>
</footer>

<style>

    footer {
    display: flex;
    justify-content: space-between;
    align-items: center; /* Elemente vertikal zentrieren */
    flex-wrap: wrap;
}

footer ul {
    margin: 0;
    padding: 0;
    list-style: none; /* Entfernt die Aufzählungspunkte */
    display: flex; /* Macht die Liste horizontal */
    gap: 15px; /* Fügt Abstand zwischen den Links hinzu */
}


footer ul li {
    display: flex; /* Stellt sicher, dass die Links auch auf einer Linie sind */
}

footer p {
    margin: 0; /* Entfernt Standardabstände */
    padding: 0;
}
</style>