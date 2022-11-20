<script>
    import iverImg from "../assets/iver.png";
    import iverStlImg from "../assets/iver-stl.png";
</script>

<h1>Lag din egen pepperkakeform</h1>
<div class="content">
    <p>Transformer et bilde med grønn bakgrunn til en 3D-printbar STL modell</p>
</div>
<img src={iverImg} height="350" alt="Bilde av iver" />
<img src={iverStlImg} height="350" alt="Bilde av iver kakeform" />

<h2>Tips og triks</h2>
<div class="content">
    <p>
        Maskeringsfargen er "optimalisert" for grønnfargen i eksempelbildet.
        Andre grønnfarger kan gi dårligere resultat.
    </p>
    <p>
        Kutt (crop) bort deler av bilde som ikke er relevant. Algoritmen er ikke
        kjempe robust - gi den et så enkelt case som mulig. Har du forslag til
        forbedringer så finner du kildekoden på github!
    </p>
</div>

<h2>Teknologi</h2>
<div class="content">
    <p>
        Løsningen bruker <a href="https://pypi.org/project/opencv-python/"
            >OpenCV</a
        >
        til å ekstrahere omriss av det som skal bli kakeform fra et bilde. Omrisset
        blir etterbehandlet av
        <a href="https://pypi.org/project/shapely/">Shapely</a>
        for å rydde opp og forenkle geometrien. Til slutt ender vi opp med en linjesegment
        som blir brukt til generering av 3D modellen ved hjelp av
        <a href="https://github.com/CadQuery/cadquery">CadQuery</a>
    </p>
</div>

<h2>Kildekode</h2>
<div class="content">
    <ul>
        <li>
            <a href="https://github.com/jensmark/cookie-cutter-frontend"
                >https://github.com/jensmark/cookie-cutter-frontend</a
            >
        </li>
        <li>
            <a href="https://github.com/jensmark/cookie-cutter-web"
                >https://github.com/jensmark/cookie-cutter-web</a
            >
        </li>
    </ul>
</div>

<style>
    div.content {
        text-align: left;
    }
</style>
