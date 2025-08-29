const element_cmt_title = document.getElementById('cmtTitle');
const element_cmt_description = document.getElementById('cmtDescription');

const cmt = {
    en: {
        CAm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("major")} </b> and <b class="cmt-txtsecondary">${getTranslatedChord("chord-A")} ${getTranslatedMajMin("minor")}</b> are the most visually "neutral" keys,
        as they do not contain any accidentals in the key signature. For this reason, they are often the first ones
        beginners learn. Their simplicity makes them ideal for technique, harmony, and composition exercises.
        <b class="cmt-txtprimary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("major")} </b> conveys a sense of purity, clarity, and balance, and its scale
        is made up exclusively of the white keys on the piano. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-A")} ${getTranslatedMajMin("minor")}</b>, its relative minor, has a more introspective or melancholic character, although
        it remains accessible and widely used in both classical and popular compositions.
        Just like <b class="cmt-txtprimary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("major")} </b>, it uses only the white keys, which facilitates technical execution
        and makes it a versatile key. </p>

        <p> Examples: <b class="cmt-txtprimary">Prelude in ${getTranslatedChord("chord-C")} ${getTranslatedMajMin("major")} – J.S. Bach </b>,
        <b class="cmt-txtsecondary"> Für Elise – Beethoven</b> </p>`,


        GEm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-G")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-E")} ${getTranslatedMajMin("minor")}</b> have
        a key signature with only one sharp: <b>${getTranslatedChord("chord-F#")}</b>. This simplicity makes them accessible for beginner pianists,
        but also highly expressive for composers.
        <b class="cmt-txtprimary">${getTranslatedChord("chord-G")} ${getTranslatedMajMin("major")}</b> conveys
        a sense of freshness, stability, and moderate joy. It’s a bright key, though less brilliant
        than C major. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-E")} ${getTranslatedMajMin("minor")}</b>, its
        relative minor, has a darker and more contemplative character. It is widely used in melancholic
        or dramatic pieces, and its scale allows for easy exploration of emotional contrasts. Both keys are
        common in classical, folk, and popular repertoires. </p>

        <p> Examples: <b class="cmt-txtprimary">Minuet in ${getTranslatedChord("chord-G")} – J.S. Bach</b>,
        <b class="cmt-txtsecondary">Prelude Op. 28 No. 4 – Chopin</b> </p>`,


        DBm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-D")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-B")} ${getTranslatedMajMin("minor")}</b> have a key signature with two sharps: <b>${getTranslatedChord("chord-F#")}</b> and <b>${getTranslatedChord("chord-C#")}</b>. This combination provides a bright yet balanced sonority, ideal for works seeking elegance and spaciousness. <b class="cmt-txtprimary">${getTranslatedChord("chord-D")} ${getTranslatedMajMin("major")}</b> conveys a sense of nobility, clarity, and celebration. It is widely used in ceremonial and Baroque music. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-B")} ${getTranslatedMajMin("minor")}</b>, its relative minor, has a more dramatic and energetic character. It’s a key that can evoke tension, mystery, or emotional intensity, and frequently appears in romantic and narrative works. Both keys offer expressive richness and are highly valued in classical repertoire. </p>

        <p> Examples: <b class="cmt-txtprimary">Canon in ${getTranslatedChord("chord-D")} – Pachelbel</b>,
        <b class="cmt-txtsecondary">In the Hall of the Mountain King – E. Grieg</b> </p>`,


        AFsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-A")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-F#")} ${getTranslatedMajMin("minor")}</b> have a key signature with three sharps: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, and <b>${getTranslatedChord("chord-G#")}</b>. This combination provides a bright and elegant sonority, highly appreciated in works with a joyful or refined character. <b class="cmt-txtprimary">${getTranslatedChord("chord-A")} ${getTranslatedMajMin("major")}</b> conveys a sense of lightness, grace, and optimism, and is common in pieces with a festive or dance-like feel. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-F#")} ${getTranslatedMajMin("minor")}</b>, its relative minor, offers a strong emotional contrast: it is a deep, passionate, and often dramatic key. Its harmonic richness allows for the exploration of intense moods, from melancholy to exaltation. Both keys are frequently found in classical and romantic repertoire. </p>

        <p> Examples: <b class="cmt-txtprimary">Rondo alla Turca – Mozart</b>,
        <b class="cmt-txtsecondary">Fantasie Op. 28 – Mendelssohn</b> </p>`,


        ECsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-E")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-C#")} ${getTranslatedMajMin("minor")}</b> have a key signature with four sharps: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, <b>${getTranslatedChord("chord-G#")}</b>, and <b>${getTranslatedChord("chord-D#")}</b>. This configuration provides a bright, expansive, and somewhat majestic sonority. <b class="cmt-txtprimary">${getTranslatedChord("chord-E")} ${getTranslatedMajMin("major")}</b> conveys a sense of energy, renewal, and vitality, making it ideal for works that evoke movement or nature. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-C#")} ${getTranslatedMajMin("minor")}</b>, its relative minor, offers a much more introspective and passionate atmosphere. It’s a key that allows for the exploration of intense emotions, from melancholy to dramatic exaltation. Both keys are highly expressive and appear in works that seek emotional impact. </p>

        <p> Examples: <b class="cmt-txtprimary">The Four Seasons: Spring – Vivaldi</b>,
        <b class="cmt-txtsecondary">Moonlight Sonata – Beethoven (Mov. I & III)</b> </p>`,


        BGsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-B")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-G#")} ${getTranslatedMajMin("minor")}</b> have a key signature with five sharps: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, <b>${getTranslatedChord("chord-G#")}</b>, <b>${getTranslatedChord("chord-D#")}</b>, and <b>${getTranslatedChord("chord-A#")}</b>. This arrangement of sharps provides a bright, refined, and somewhat distant sonority. <b class="cmt-txtprimary">${getTranslatedChord("chord-B")} ${getTranslatedMajMin("major")}</b> conveys a sense of elegance, serenity, and emotional depth. It’s a key often found in delicate and contemplative works. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-G#")} ${getTranslatedMajMin("minor")}</b>, its relative minor, has a passionate and virtuosic character. It’s a demanding key, both technically and expressively, and is associated with pieces of great intensity and drama. Both keys are less common in basic repertoire but highly valued by advanced pianists. </p>

        <p> Examples: <b class="cmt-txtprimary">Nocturne Op. 32 No. 1 – Chopin</b>,
        <b class="cmt-txtsecondary">La campanella – Liszt</b> </p>`,


        FsDsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-F#")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-D#")} ${getTranslatedMajMin("minor")}</b> have a key signature with six sharps: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, <b>${getTranslatedChord("chord-G#")}</b>, <b>${getTranslatedChord("chord-D#")}</b>, <b>${getTranslatedChord("chord-A#")}</b>, and <b>${getTranslatedChord("chord-E#")}</b>. This key demands greater technical precision but offers a crystalline and refined sonority. <b class="cmt-txtprimary">${getTranslatedChord("chord-F#")} ${getTranslatedMajMin("major")}</b> conveys a sense of deep calm, elegance, and spirituality. It’s ideal for intimate and expressive pieces. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-D#")} ${getTranslatedMajMin("minor")}</b>, its relative minor, has a passionate and turbulent character. It’s a key that allows for the exploration of extreme emotions, with great harmonic and technical richness. Although not common in introductory works, both keys have been widely explored by Romantic composers and virtuoso soloists. </p>

        <p> Examples: <b class="cmt-txtprimary">Romance Op. 28 No. 2 – Schumann</b>,
        <b class="cmt-txtsecondary">Étude Op. 8 No. 12 – Scriabin</b> </p>`,


        CsAsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-C#")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-A#")} ${getTranslatedMajMin("minor")}</b> have a key signature with seven sharps: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, <b>${getTranslatedChord("chord-G#")}</b>, <b>${getTranslatedChord("chord-D#")}</b>, <b>${getTranslatedChord("chord-A#")}</b>, <b>${getTranslatedChord("chord-E#")}</b>, and <b>${getTranslatedChord("chord-B#")}</b>. This extreme configuration offers a bright, intense, and somewhat ethereal sonority. <b class="cmt-txtprimary">${getTranslatedChord("chord-C#")} ${getTranslatedMajMin("major")}</b> is associated with highly expressive and refined works, and often appears in pieces of high technical and emotional level. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-A#")} ${getTranslatedMajMin("minor")}</b>, its relative minor, is rarely used in practice due to its visual complexity. In many cases, it is replaced by its enharmonic equivalent <b>${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("minor")}</b>, which is more comfortable to read. Nevertheless, its theoretical existence completes the tonal circle and represents the highest point of alteration within the traditional system. </p>

        <p> Examples: <b class="cmt-txtprimary">Étude Op. 8 No. 1 – Scriabin</b>,
        <b class="cmt-txtsecondary">Piano Concerto No. 1 Op. 23 – Tchaikovsky</b> </p>`,


        FDm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-F")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-D")} ${getTranslatedMajMin("minor")}</b> have a key signature with only one flat: <b>${getTranslatedChord("chord-Bb")}</b>. This configuration offers a warm and stable sonority, ideal for works seeking balance and nobility. <b class="cmt-txtprimary">${getTranslatedChord("chord-F")} ${getTranslatedMajMin("major")}</b> conveys a sense of serenity, elegance, and naturalness, and is widely used in classical, choral, and folk music. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-D")} ${getTranslatedMajMin("minor")}</b>, its relative minor, has a solemn and profound character. It’s a key associated with tragedy, spirituality, and drama, and frequently appears in religious and funeral works. Its expressiveness makes it one of the most powerful minor keys in the repertoire. </p>

        <p> Examples: <b class="cmt-txtprimary">The Four Seasons: Autumn – Vivaldi</b>,
        <b class="cmt-txtsecondary">Lacrimosa – Mozart</b> </p>`,


        BbGm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-G")} ${getTranslatedMajMin("minor")}</b> have a key signature with two flats: <b>${getTranslatedChord("chord-Bb")}</b> and <b>${getTranslatedChord("chord-Eb")}</b>. This combination offers a warm, noble, and enveloping sonority. <b class="cmt-txtprimary">${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("major")}</b> conveys a sense of solemnity, sweetness, and emotional depth. It is widely used in sacred, romantic, and choral music. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-G")} ${getTranslatedMajMin("minor")}</b>, its relative minor, has an intense and dramatic character. It’s a key that evokes tension, mystery, and expressive strength, ideal for narrative or passionate works. Both keys allow for the exploration of emotional contrasts with great timbral richness. </p>

        <p> Examples: <b class="cmt-txtprimary">Ave Maria – Schubert (transcription by Liszt)</b>,
        <b class="cmt-txtsecondary">The Four Seasons: Summer – Vivaldi</b> </p>`,


        EbCm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Eb")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("minor")}</b> have a key signature with three flats: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, and <b>${getTranslatedChord("chord-Ab")}</b>. This configuration offers a warm, enveloping, and deeply expressive sonority. <b class="cmt-txtprimary">${getTranslatedChord("chord-Eb")} ${getTranslatedMajMin("major")}</b> conveys a sense of lyricism, nobility, and romanticism. It frequently appears in delicate and emotional pieces. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("minor")}</b>, its relative minor, has a dramatic and passionate character. It’s ideal for works that explore intense emotions, from melancholy to inner struggle. This key has been used by composers to convey emotional depth and tension with great power. </p>

        <p> Examples: <b class="cmt-txtprimary">Nocturne Op. 9 No. 2 – Chopin</b>,
        <b class="cmt-txtsecondary">Sonata "Pathétique" Op. 13 – Beethoven</b> </p>`,


        AbFm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Ab")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-F")} ${getTranslatedMajMin("minor")}</b> have a key signature with four flats: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, <b>${getTranslatedChord("chord-Ab")}</b>, and <b>${getTranslatedChord("chord-Db")}</b>. This arrangement of flats offers a soft, enveloping, and emotionally rich sonority. <b class="cmt-txtprimary">${getTranslatedChord("chord-Ab")} ${getTranslatedMajMin("major")}</b> conveys a sense of deep love, tenderness, and contemplation. It is very present in romantic and lyrical repertoire. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-F")} ${getTranslatedMajMin("minor")}</b>, its relative minor, has a dark and powerful character. It’s ideal for works that evoke tension, drama, or intense emotional landscapes. Its expressiveness makes it a favorite for compositions that portray natural or human contrasts. </p>

        <p> Examples: <b class="cmt-txtprimary">Liebestraum No. 3 – Liszt</b>,
        <b class="cmt-txtsecondary">The Four Seasons: Winter – Vivaldi</b> </p>`,


        DbBbm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Db")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("minor")}</b> have a key signature with five flats: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, <b>${getTranslatedChord("chord-Ab")}</b>, <b>${getTranslatedChord("chord-Db")}</b>, and <b>${getTranslatedChord("chord-Gb")}</b>. This combination provides a velvety, introspective, and sophisticated sonority. <b class="cmt-txtprimary">${getTranslatedChord("chord-Db")} ${getTranslatedMajMin("major")}</b> conveys an ethereal and contemplative atmosphere, ideal for pieces that evoke delicate or poetic emotional landscapes. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("minor")}</b>, its relative minor, has a solemn and tragic character. It’s a key associated with the funereal, the heroic, and the profound, and has been used in works that explore loss, memory, and emotional intensity. Together, these keys offer a rich and moving expressive palette. </p>

        <p> Examples: <b class="cmt-txtprimary">Clair de lune – Debussy</b>,
        <b class="cmt-txtsecondary">Sonata No. 2 "Funeral March" – Chopin</b> </p>`,


        GbEbm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Gb")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-Eb")} ${getTranslatedMajMin("minor")}</b> have a key signature with six flats: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, <b>${getTranslatedChord("chord-Ab")}</b>, <b>${getTranslatedChord("chord-Db")}</b>, <b>${getTranslatedChord("chord-Gb")}</b>, and <b>${getTranslatedChord("chord-Cb")}</b>. This configuration offers an elegant and somewhat mysterious sonority. <b class="cmt-txtprimary">${getTranslatedChord("chord-Gb")} ${getTranslatedMajMin("major")}</b> is known for its fluidity and timbral richness, and is associated with virtuosic and brilliant works. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-Eb")} ${getTranslatedMajMin("minor")}</b>, its relative minor, has a dark, intense, and compact character. It’s a key that allows for the exploration of dense emotions and dramatic contrasts. Both keys are appreciated by advanced pianists for their visual and expressive complexity. </p>

        <p> Examples: <b class="cmt-txtprimary">Étude Op. 10 No. 5 "Black Keys" – Chopin</b>,
        <b class="cmt-txtsecondary">Prelude Op. 28 No. 14 – Chopin</b> </p>`,


        CbAbm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Cb")} ${getTranslatedMajMin("major")}</b>
        and <b class="cmt-txtsecondary">${getTranslatedChord("chord-Ab")} ${getTranslatedMajMin("minor")}</b> have a key signature with seven flats: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, <b>${getTranslatedChord("chord-Ab")}</b>, <b>${getTranslatedChord("chord-Db")}</b>, <b>${getTranslatedChord("chord-Gb")}</b>, <b>${getTranslatedChord("chord-Cb")}</b>, and <b>${getTranslatedChord("chord-Fb")}</b>. This harmonic structure makes them the most complex keys to read within the tonal system. For this reason, they are often replaced by their enharmonic equivalents: <b>${getTranslatedChord("chord-B")} ${getTranslatedMajMin("major")}</b> and <b>${getTranslatedChord("chord-G#")} ${getTranslatedMajMin("minor")}</b>, which sound the same but are easier to write and read. </p>

        <p> Despite their rarity, these keys do exist and may appear in modulations or specific theoretical contexts. Their use can reflect very particular harmonic, notational, or stylistic decisions. They represent the closure of the tonal circle and complete the logic of the key signature system. </p>`,
    },
    es: {
        CAm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("major")} </b> y <b class="cmt-txtsecondary">${getTranslatedChord("chord-A")} ${getTranslatedMajMin("minor")}</b> son las tonalidades más "neutras" visualmente,
        ya que no presentan alteraciones en la armadura. Por esta razón, suelen ser las primeras que
        aprenden los principiantes. Su simplicidad las hace ideales para ejercicios de técnica, armonía
        y composición. <b class="cmt-txtprimary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("major")} </b> transmite una sensación de pureza, claridad y equilibrio, y su escala
        está formada exclusivamente por las teclas blancas del piano. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-A")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, tiene un carácter más introspectivo o melancólico, aunque
        sigue siendo accesible y muy utilizada en composiciones tanto clásicas como populares.
        Al igual que <b class="cmt-txtprimary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("major")} </b>, utiliza únicamente las teclas blancas, lo que facilita su ejecución
        técnica y la convierte en una tonalidad versátil. </p>
        
        <p> Ejemplos: <b class="cmt-txtprimary">Preludio en ${getTranslatedChord("chord-C")} ${getTranslatedMajMin("major")} – J.S. Bach </b>,
        <b class="cmt-txtsecondary"> Für Elise – Beethoven</b> </p>`,


        GEm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-G")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-E")} ${getTranslatedMajMin("minor")}</b> tienen
        una armadura con un solo sostenido: <b>${getTranslatedChord("chord-F#")}</b>. Esta simplicidad las hace accesibles para pianistas
        principiantes, pero también muy expresivas para compositores.
        <b class="cmt-txtprimary">${getTranslatedChord("chord-G")} ${getTranslatedMajMin("major")}</b> transmite
        una sensación de frescura, estabilidad y alegría moderada. Es una tonalidad luminosa, pero menos brillante
        que Do mayor. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-E")} ${getTranslatedMajMin("minor")}</b>, su
        relativa menor, tiene un carácter más sombrío y contemplativo. Es muy utilizada en piezas melancólicas
        o dramáticas, y su escala permite explorar contrastes emocionales con facilidad. Ambas tonalidades son
        comunes en repertorios clásicos, folclóricos y populares. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Minueto en ${getTranslatedChord("chord-G")} – J.S. Bach</b>,
        <b class="cmt-txtsecondary">Preludio Op. 28 No. 4 – Chopin</b> </p>`,


        DBm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-D")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-B")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con dos sostenidos: <b>${getTranslatedChord("chord-F#")}</b> y <b>${getTranslatedChord("chord-C#")}</b>. Esta combinación aporta una sonoridad brillante pero equilibrada, ideal para obras que buscan elegancia y amplitud. <b class="cmt-txtprimary">${getTranslatedChord("chord-D")} ${getTranslatedMajMin("major")}</b> transmite una sensación de nobleza, claridad y celebración. Es muy utilizada en música ceremonial y barroca. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-B")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, tiene un carácter más dramático y enérgico. Es una tonalidad que puede evocar tensión, misterio o intensidad emocional, y aparece con frecuencia en obras románticas y narrativas. Ambas tonalidades ofrecen riqueza expresiva y son muy valoradas en el repertorio clásico. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Canon en ${getTranslatedChord("chord-D")} – Pachelbel</b>,
        <b class="cmt-txtsecondary">In the Hall of the Mountain King – E. Grieg</b> </p>`,


        AFsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-A")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-F#")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con tres sostenidos: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b> y <b>${getTranslatedChord("chord-G#")}</b>. Esta combinación aporta una sonoridad brillante y elegante, muy apreciada en obras de carácter alegre o refinado. <b class="cmt-txtprimary">${getTranslatedChord("chord-A")} ${getTranslatedMajMin("major")}</b> transmite una sensación de ligereza, gracia y optimismo, y es común en piezas con un aire festivo o danzante. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-F#")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, ofrece un contraste emocional marcado: es una tonalidad profunda, apasionada y a menudo dramática. Su riqueza armónica permite explorar estados de ánimo intensos, desde la melancolía hasta la exaltación. Ambas tonalidades son frecuentes en el repertorio clásico y romántico. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Rondo alla Turca – Mozart</b>,
        <b class="cmt-txtsecondary">Fantasie Op. 28 – Mendelssohn</b> </p>`,


        ECsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-E")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-C#")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con cuatro sostenidos: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, <b>${getTranslatedChord("chord-G#")}</b> y <b>${getTranslatedChord("chord-D#")}</b>. Esta configuración aporta una sonoridad brillante, expansiva y algo majestuosa. <b class="cmt-txtprimary">${getTranslatedChord("chord-E")} ${getTranslatedMajMin("major")}</b> transmite una sensación de energía, renovación y vitalidad, y es ideal para obras que evocan movimiento o naturaleza. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-C#")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, ofrece una atmósfera mucho más introspectiva y apasionada. Es una tonalidad que permite explorar emociones intensas, desde la melancolía hasta la exaltación dramática. Ambas tonalidades son muy expresivas y aparecen en obras que buscan impacto emocional. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Las Cuatro Estaciones: Primavera – Vivaldi</b>,
        <b class="cmt-txtsecondary">Moonlight Sonata – Beethoven (Mov. I & III)</b> </p>`,


        BGsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-B")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-G#")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con cinco sostenidos: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, <b>${getTranslatedChord("chord-G#")}</b>, <b>${getTranslatedChord("chord-D#")}</b> y <b>${getTranslatedChord("chord-A#")}</b>. Esta disposición de sostenidos aporta una sonoridad brillante, refinada y algo distante. <b class="cmt-txtprimary">${getTranslatedChord("chord-B")} ${getTranslatedMajMin("major")}</b> transmite una sensación de elegancia, serenidad y profundidad emocional. Es una tonalidad que aparece en obras delicadas y contemplativas. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-G#")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, tiene un carácter apasionado y virtuoso. Es una tonalidad exigente, tanto técnica como expresivamente, y se asocia con piezas de gran intensidad y dramatismo. Ambas tonalidades son menos comunes en el repertorio básico, pero muy valoradas por pianistas avanzados. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Nocturno Op. 32 No. 1 – Chopin</b>,
        <b class="cmt-txtsecondary">La campanella – Liszt</b> </p>`,


        FsDsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-F#")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-D#")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con seis sostenidos: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, <b>${getTranslatedChord("chord-G#")}</b>, <b>${getTranslatedChord("chord-D#")}</b>, <b>${getTranslatedChord("chord-A#")}</b> y <b>${getTranslatedChord("chord-E#")}</b>. Esta tonalidad exige mayor precisión técnica, pero ofrece una sonoridad cristalina y refinada. <b class="cmt-txtprimary">${getTranslatedChord("chord-F#")} ${getTranslatedMajMin("major")}</b> transmite una sensación de calma profunda, elegancia y espiritualidad. Es ideal para piezas íntimas y expresivas. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-D#")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, tiene un carácter apasionado y turbulento. Es una tonalidad que permite explorar emociones extremas, con gran riqueza armónica y técnica. Si bien no son frecuentes en obras introductorias, ambas tonalidades han sido ampliamente exploradas por autores románticos y solistas virtuosos. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Romance Op. 28 No. 2 – Schumann</b>,
        <b class="cmt-txtsecondary">Estudio Op. 8 No. 12 – Scriabin</b> </p>`,


        CsAsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-C#")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-A#")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con siete sostenidos: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, <b>${getTranslatedChord("chord-G#")}</b>, <b>${getTranslatedChord("chord-D#")}</b>, <b>${getTranslatedChord("chord-A#")}</b>, <b>${getTranslatedChord("chord-E#")}</b> y <b>${getTranslatedChord("chord-B#")}</b>. Esta configuración extrema ofrece una sonoridad brillante, intensa y algo etérea. <b class="cmt-txtprimary">${getTranslatedChord("chord-C#")} ${getTranslatedMajMin("major")}</b> se asocia con obras de gran expresividad y refinamiento, y suele aparecer en piezas de alto nivel técnico y emocional. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-A#")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, es poco utilizada en la práctica debido a su complejidad visual. En muchos casos se reemplaza por su enarmónica <b>${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("minor")}</b>, que resulta más cómoda de leer. Aun así, su existencia teórica completa el círculo tonal y representa el punto más alto en cuanto a alteraciones dentro del sistema tradicional. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Estudio Op. 8 No. 1 – Scriabin</b>,
        <b class="cmt-txtsecondary">Concierto para Piano No. 1 Op. 23 - Tchaikovsky</b> </p>`,


        FDm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-F")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-D")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con un solo bemol: <b>${getTranslatedChord("chord-Bb")}</b>. Esta configuración ofrece una sonoridad cálida y estable, ideal para obras que buscan equilibrio y nobleza. <b class="cmt-txtprimary">${getTranslatedChord("chord-F")} ${getTranslatedMajMin("major")}</b> transmite una sensación de serenidad, elegancia y naturalidad, y es muy utilizada en música clásica, coral y folclórica. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-D")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, tiene un carácter solemne y profundo. Es una tonalidad que se asocia con lo trágico, lo espiritual y lo dramático, y aparece con frecuencia en obras religiosas y fúnebres. Su expresividad la convierte en una de las menores más poderosas del repertorio. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Las Cuatro Estaciones: Otoño – Vivaldi</b>,
        <b class="cmt-txtsecondary">Lacrimosa – Mozart</b> </p>`,


        BbGm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-G")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con dos bemoles: <b>${getTranslatedChord("chord-Bb")}</b> y <b>${getTranslatedChord("chord-Eb")}</b>. Esta combinación ofrece una sonoridad cálida, noble y envolvente. <b class="cmt-txtprimary">${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("major")}</b> transmite una sensación de solemnidad, dulzura y profundidad emocional. Es muy utilizada en música sacra, romántica y coral. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-G")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, tiene un carácter intenso y dramático. Es una tonalidad que evoca tensión, misterio y fuerza expresiva, ideal para obras narrativas o apasionadas. Ambas tonalidades permiten explorar contrastes emocionales con gran riqueza tímbrica. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Ave Maria – Schubert (transcripción de Liszt)</b>,
        <b class="cmt-txtsecondary">Las Cuatro Estaciones: Verano – Vivaldi</b> </p>`,


        EbCm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Eb")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con tres bemoles: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b> y <b>${getTranslatedChord("chord-Ab")}</b>. Esta configuración ofrece una sonoridad cálida, envolvente y profundamente expresiva. <b class="cmt-txtprimary">${getTranslatedChord("chord-Eb")} ${getTranslatedMajMin("major")}</b> transmite una sensación de lirismo, nobleza y romanticismo. Es una tonalidad que aparece con frecuencia en piezas delicadas y emotivas. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, tiene un carácter dramático y apasionado. Es ideal para obras que exploran emociones intensas, desde la melancolía hasta la lucha interior. Esta tonalidad ha sido utilizada por compositores para transmitir profundidad y tensión emocional con gran fuerza. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Nocturno Op. 9 No. 2 – Chopin</b>,
        <b class="cmt-txtsecondary">Sonata "Patética" Op. 13 – Beethoven</b> </p>`,


        AbFm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Ab")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-F")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con cuatro bemoles: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, <b>${getTranslatedChord("chord-Ab")}</b> y <b>${getTranslatedChord("chord-Db")}</b>. Esta disposición de bemoles ofrece una sonoridad suave, envolvente y emocionalmente rica. <b class="cmt-txtprimary">${getTranslatedChord("chord-Ab")} ${getTranslatedMajMin("major")}</b> transmite una sensación de amor profundo, ternura y contemplación. Es una tonalidad muy presente en el repertorio romántico y lírico. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-F")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, tiene un carácter sombrío y poderoso. Es ideal para obras que evocan tensión, dramatismo o paisajes emocionales intensos. Su expresividad la convierte en una favorita para composiciones que retratan contrastes naturales o humanos. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Liebestraum No. 3 – Liszt</b>,
        <b class="cmt-txtsecondary">Las Cuatro Estaciones: Invierno – Vivaldi</b> </p>`,


        DbBbm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Db")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con cinco bemoles: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, <b>${getTranslatedChord("chord-Ab")}</b>, <b>${getTranslatedChord("chord-Db")}</b> y <b>${getTranslatedChord("chord-Gb")}</b>. Esta combinación aporta una sonoridad aterciopelada, introspectiva y sofisticada. <b class="cmt-txtprimary">${getTranslatedChord("chord-Db")} ${getTranslatedMajMin("major")}</b> transmite una atmósfera etérea y contemplativa, ideal para piezas que evocan paisajes emocionales delicados o poéticos. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, tiene un carácter solemne y trágico. Es una tonalidad que se asocia con lo fúnebre, lo heroico y lo profundo, y ha sido utilizada en obras que exploran la pérdida, la memoria y la intensidad emocional. Juntas, estas tonalidades ofrecen una paleta expresiva rica y conmovedora. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Clair de lune – Debussy</b>,
        <b class="cmt-txtsecondary">Sonata No. 2 "Marcha Fúnebre" – Chopin</b> </p>`,


        GbEbm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Gb")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-Eb")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con seis bemoles: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, <b>${getTranslatedChord("chord-Ab")}</b>, <b>${getTranslatedChord("chord-Db")}</b>, <b>${getTranslatedChord("chord-Gb")}</b> y <b>${getTranslatedChord("chord-Cb")}</b>. Esta configuración ofrece una sonoridad elegante y algo misteriosa. <b class="cmt-txtprimary">${getTranslatedChord("chord-Gb")} ${getTranslatedMajMin("major")}</b> es conocida por su fluidez y riqueza tímbrica, y se asocia con obras virtuosas y brillantes. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-Eb")} ${getTranslatedMajMin("minor")}</b>, su relativa menor, tiene un carácter sombrío, intenso y compacto. Es una tonalidad que permite explorar emociones densas y contrastes dramáticos. Ambas tonalidades son apreciadas por pianistas avanzados por su complejidad visual y expresiva. </p>

        <p> Ejemplos: <b class="cmt-txtprimary">Estudio Op. 10 No. 5 "Black Keys" – Chopin</b>,
        <b class="cmt-txtsecondary">Preludio Op. 28 No. 14 – Chopin</b> </p>`,


        CbAbm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Cb")} ${getTranslatedMajMin("major")}</b>
        y <b class="cmt-txtsecondary">${getTranslatedChord("chord-Ab")} ${getTranslatedMajMin("minor")}</b> tienen una armadura con siete bemoles: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, <b>${getTranslatedChord("chord-Ab")}</b>, <b>${getTranslatedChord("chord-Db")}</b>, <b>${getTranslatedChord("chord-Gb")}</b>, <b>${getTranslatedChord("chord-Cb")}</b> y <b>${getTranslatedChord("chord-Fb")}</b>. Esta estructura armónica las convierte en las tonalidades más complejas de leer dentro del sistema tonal. Por esta razón, suelen reemplazarse por sus enarmónicas: <b>${getTranslatedChord("chord-B")} ${getTranslatedMajMin("major")}</b> y <b>${getTranslatedChord("chord-G#")} ${getTranslatedMajMin("minor")}</b>, que suenan igual pero son más fáciles de escribir y leer. </p>

        <p> A pesar de su rareza, estas tonalidades existen y pueden aparecer en modulaciones o contextos teóricos específicos. Su uso puede responder a decisiones armónicas, notacionales o estilísticas muy particulares. Representan el cierre del círculo tonal y completan la lógica del sistema de armaduras. </p>`,
    },
    pt: {
        CAm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-A")} ${getTranslatedMajMin("minor")}</b> são as tonalidades mais "neutras" visualmente, pois não apresentam alterações na armadura. Por isso, costumam ser as primeiras que os iniciantes aprendem. Sua simplicidade as torna ideais para exercícios de técnica, harmonia e composição. <b class="cmt-txtprimary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("major")}</b> transmite uma sensação de pureza, clareza e equilíbrio, e sua escala é formada exclusivamente pelas teclas brancas do piano. </p>

        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-A")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, tem um caráter mais introspectivo ou melancólico, embora continue sendo acessível e muito utilizada em composições tanto clássicas quanto populares. Assim como <b class="cmt-txtprimary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("major")}</b>, utiliza apenas as teclas brancas, o que facilita sua execução técnica e a torna uma tonalidade versátil. </p>

        <p> Exemplos: <b class="cmt-txtprimary">Prelúdio em ${getTranslatedChord("chord-C")} ${getTranslatedMajMin("major")} – J.S. Bach</b>, <b class="cmt-txtsecondary">Für Elise – Beethoven</b> </p>`,


        GEm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-G")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-E")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com apenas um sustenido: <b>${getTranslatedChord("chord-F#")}</b>. Essa simplicidade as torna acessíveis para pianistas iniciantes, mas também muito expressivas para compositores. <b class="cmt-txtprimary">${getTranslatedChord("chord-G")} ${getTranslatedMajMin("major")}</b> transmite uma sensação de frescor, estabilidade e alegria moderada. É uma tonalidade luminosa, mas menos brilhante que Dó maior. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-E")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, tem um caráter mais sombrio e contemplativo. É muito utilizada em peças melancólicas ou dramáticas, e sua escala permite explorar contrastes emocionais com facilidade. Ambas as tonalidades são comuns em repertórios clássicos, folclóricos e populares. </p>
        <p> Exemplos: <b class="cmt-txtprimary">Minueto em ${getTranslatedChord("chord-G")} – J.S. Bach</b>, <b class="cmt-txtsecondary">Prelúdio Op. 28 No. 4 – Chopin</b> </p>`,


        DBm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-D")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-B")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com dois sustenidos: <b>${getTranslatedChord("chord-F#")}</b> e <b>${getTranslatedChord("chord-C#")}</b>. Essa combinação oferece uma sonoridade brilhante mas equilibrada, ideal para obras que buscam elegância e amplitude. <b class="cmt-txtprimary">${getTranslatedChord("chord-D")} ${getTranslatedMajMin("major")}</b> transmite uma sensação de nobreza, clareza e celebração. É muito utilizada em música cerimonial e barroca. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-B")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, tem um caráter mais dramático e enérgico. É uma tonalidade que pode evocar tensão, mistério ou intensidade emocional, e aparece com frequência em obras românticas e narrativas. Ambas oferecem riqueza expressiva e são muito valorizadas no repertório clássico. </p>
        <p> Exemplos: <b class="cmt-txtprimary">Canon em ${getTranslatedChord("chord-D")} – Pachelbel</b>, <b class="cmt-txtsecondary">In the Hall of the Mountain King – E. Grieg</b> </p>`,


        AFsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-A")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-F#")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com três sustenidos: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b> e <b>${getTranslatedChord("chord-G#")}</b>. Essa combinação oferece uma sonoridade brilhante e elegante, muito apreciada em obras alegres ou refinadas. <b class="cmt-txtprimary">${getTranslatedChord("chord-A")} ${getTranslatedMajMin("major")}</b> transmite leveza, graça e otimismo, sendo comum em peças festivas ou dançantes. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-F#")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, oferece um contraste emocional marcante: é uma tonalidade profunda, apaixonada e frequentemente dramática. Sua riqueza harmônica permite explorar estados de espírito intensos, da melancolia à exaltação. Ambas são frequentes no repertório clássico e romântico. </p>
        <p> Exemplos: <b class="cmt-txtprimary">Rondo alla Turca – Mozart</b>, <b class="cmt-txtsecondary">Fantasie Op. 28 – Mendelssohn</b> </p>`,


        ECsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-E")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-C#")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com quatro sustenidos: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, <b>${getTranslatedChord("chord-G#")}</b> e <b>${getTranslatedChord("chord-D#")}</b>. Essa configuração oferece uma sonoridade brilhante, expansiva e um tanto majestosa. <b class="cmt-txtprimary">${getTranslatedChord("chord-E")} ${getTranslatedMajMin("major")}</b> transmite uma sensação de energia, renovação e vitalidade, sendo ideal para obras que evocam movimento ou natureza. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-C#")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, oferece uma atmosfera muito mais introspectiva e apaixonada. É uma tonalidade que permite explorar emoções intensas, da melancolia à exaltação dramática. Ambas são altamente expressivas e aparecem em obras que buscam impacto emocional. </p>
        <p> Exemplos: <b class="cmt-txtprimary">As Quatro Estações: Primavera – Vivaldi</b>, <b class="cmt-txtsecondary">Sonata ao Luar – Beethoven (Mov. I & III)</b> </p>`,


        BGsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-B")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-G#")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com cinco sustenidos: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, <b>${getTranslatedChord("chord-G#")}</b>, <b>${getTranslatedChord("chord-D#")}</b> e <b>${getTranslatedChord("chord-A#")}</b>. Essa disposição oferece uma sonoridade brilhante, refinada e um pouco distante. <b class="cmt-txtprimary">${getTranslatedChord("chord-B")} ${getTranslatedMajMin("major")}</b> transmite uma sensação de elegância, serenidade e profundidade emocional. É uma tonalidade presente em obras delicadas e contemplativas. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-G#")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, tem um caráter apaixonado e virtuoso. É uma tonalidade exigente, tanto técnica quanto expressivamente, e está associada a peças de grande intensidade e dramatismo. Ambas são menos comuns no repertório básico, mas muito valorizadas por pianistas avançados. </p>
        <p> Exemplos: <b class="cmt-txtprimary">Noturno Op. 32 No. 1 – Chopin</b>, <b class="cmt-txtsecondary">La campanella – Liszt</b> </p>`,


        FsDsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-F#")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-D#")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com seis sustenidos: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, <b>${getTranslatedChord("chord-G#")}</b>, <b>${getTranslatedChord("chord-D#")}</b>, <b>${getTranslatedChord("chord-A#")}</b> e <b>${getTranslatedChord("chord-E#")}</b>. Essa tonalidade exige maior precisão técnica, mas oferece uma sonoridade cristalina e refinada. <b class="cmt-txtprimary">${getTranslatedChord("chord-F#")} ${getTranslatedMajMin("major")}</b> transmite uma sensação de calma profunda, elegância e espiritualidade. É ideal para peças íntimas e expressivas. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-D#")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, tem um caráter apaixonado e turbulento. É uma tonalidade que permite explorar emoções extremas, com grande riqueza harmônica e técnica. Embora não sejam frequentes em obras introdutórias, ambas foram amplamente exploradas por autores românticos e solistas virtuosos. </p>
        <p> Exemplos: <b class="cmt-txtprimary">Romance Op. 28 No. 2 – Schumann</b>, <b class="cmt-txtsecondary">Estudo Op. 8 No. 12 – Scriabin</b> </p>`,


        CsAsm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-C#")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-A#")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com sete sustenidos: <b>${getTranslatedChord("chord-F#")}</b>, <b>${getTranslatedChord("chord-C#")}</b>, <b>${getTranslatedChord("chord-G#")}</b>, <b>${getTranslatedChord("chord-D#")}</b>, <b>${getTranslatedChord("chord-A#")}</b>, <b>${getTranslatedChord("chord-E#")}</b> e <b>${getTranslatedChord("chord-B#")}</b>. Essa configuração extrema oferece uma sonoridade brilhante, intensa e um pouco etérea. <b class="cmt-txtprimary">${getTranslatedChord("chord-C#")} ${getTranslatedMajMin("major")}</b> está associada a obras de grande expressividade e refinamento, e costuma aparecer em peças de alto nível técnico e emocional. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-A#")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, é pouco utilizada na prática devido à sua complexidade visual. Em muitos casos, é substituída por sua enarmônica <b>${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("minor")}</b>, que é mais confortável de ler. Ainda assim, sua existência teórica completa o círculo tonal e representa o ponto mais alto em alterações dentro do sistema tradicional. </p>
        <p> Exemplos: <b class="cmt-txtprimary">Estudo Op. 8 No. 1 – Scriabin</b>, <b class="cmt-txtsecondary">Concerto para Piano No. 1 Op. 23 – Tchaikovsky</b> </p>`,


        FDm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-F")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-D")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com apenas um bemol: <b>${getTranslatedChord("chord-Bb")}</b>. Essa configuração oferece uma sonoridade quente e estável, ideal para obras que buscam equilíbrio e nobreza. <b class="cmt-txtprimary">${getTranslatedChord("chord-F")} ${getTranslatedMajMin("major")}</b> transmite uma sensação de serenidade, elegância e naturalidade, sendo muito utilizada na música clássica, coral e folclórica. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-D")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, tem um caráter solene e profundo. É uma tonalidade associada ao trágico, ao espiritual e ao dramático, aparecendo com frequência em obras religiosas e fúnebres. Sua expressividade a torna uma das menores mais poderosas do repertório. </p>
        <p> Exemplos: <b class="cmt-txtprimary">As Quatro Estações: Outono – Vivaldi</b>, <b class="cmt-txtsecondary">Lacrimosa – Mozart</b> </p>`,


        BbGm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-G")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com dois bemóis: <b>${getTranslatedChord("chord-Bb")}</b> e <b>${getTranslatedChord("chord-Eb")}</b>. Essa combinação oferece uma sonoridade quente, nobre e envolvente. <b class="cmt-txtprimary">${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("major")}</b> transmite uma sensação de solenidade, doçura e profundidade emocional. É muito utilizada na música sacra, romântica e coral. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-G")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, tem um caráter intenso e dramático. É uma tonalidade que evoca tensão, mistério e força expressiva, ideal para obras narrativas ou apaixonadas. Ambas permitem explorar contrastes emocionais com grande riqueza tímbrica. </p>
        <p> Exemplos: <b class="cmt-txtprimary">Ave Maria – Schubert (transcrição de Liszt)</b>, <b class="cmt-txtsecondary">As Quatro Estações: Verão – Vivaldi</b> </p>`,


        EbCm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Eb")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com três bemóis: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b> e <b>${getTranslatedChord("chord-Ab")}</b>. Essa configuração oferece uma sonoridade quente, envolvente e profundamente expressiva. <b class="cmt-txtprimary">${getTranslatedChord("chord-Eb")} ${getTranslatedMajMin("major")}</b> transmite uma sensação de lirismo, nobreza e romantismo. É uma tonalidade que aparece com frequência em peças delicadas e emotivas. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-C")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, tem um caráter dramático e apaixonado. É ideal para obras que exploram emoções intensas, da melancolia ao conflito interior. Essa tonalidade tem sido usada por compositores para transmitir profundidade e tensão emocional com grande força. </p>
        <p> Exemplos: <b class="cmt-txtprimary">Noturno Op. 9 No. 2 – Chopin</b>, <b class="cmt-txtsecondary">Sonata "Patética" Op. 13 – Beethoven</b> </p>`,


        AbFm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Ab")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-F")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com quatro bemóis: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, <b>${getTranslatedChord("chord-Ab")}</b> e <b>${getTranslatedChord("chord-Db")}</b>. Essa disposição oferece uma sonoridade suave, envolvente e emocionalmente rica. <b class="cmt-txtprimary">${getTranslatedChord("chord-Ab")} ${getTranslatedMajMin("major")}</b> transmite uma sensação de amor profundo, ternura e contemplação. É uma tonalidade muito presente no repertório romântico e lírico. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-F")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, tem um caráter sombrio e poderoso. É ideal para obras que evocam tensão, dramatismo ou paisagens emocionais intensas. Sua expressividade a torna favorita em composições que retratam contrastes naturais ou humanos. </p>
        <p> Exemplos: <b class="cmt-txtprimary">Liebestraum No. 3 – Liszt</b>, <b class="cmt-txtsecondary">As Quatro Estações: Inverno – Vivaldi</b> </p>`,


        DbBbm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Db")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com cinco bemóis: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, <b>${getTranslatedChord("chord-Ab")}</b>, <b>${getTranslatedChord("chord-Db")}</b> e <b>${getTranslatedChord("chord-Gb")}</b>. Essa combinação oferece uma sonoridade aveludada, introspectiva e sofisticada. <b class="cmt-txtprimary">${getTranslatedChord("chord-Db")} ${getTranslatedMajMin("major")}</b> transmite uma atmosfera etérea e contemplativa, ideal para peças que evocam paisagens emocionais delicadas ou poéticas. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-Bb")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, tem um caráter solene e trágico. É uma tonalidade associada ao fúnebre, ao heroico e ao profundo, e tem sido usada em obras que exploram a perda, a memória e a intensidade emocional. Juntas, essas tonalidades oferecem uma paleta expressiva rica e comovente. </p>
        <p> Exemplos: <b class="cmt-txtprimary">Clair de lune – Debussy</b>, <b class="cmt-txtsecondary">Sonata No. 2 "Marcha Fúnebre" – Chopin</b> </p>`,


        GbEbm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Gb")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-Eb")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com seis bemóis: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, <b>${getTranslatedChord("chord-Ab")}</b>, <b>${getTranslatedChord("chord-Db")}</b>, <b>${getTranslatedChord("chord-Gb")}</b> e <b>${getTranslatedChord("chord-Cb")}</b>. Essa configuração oferece uma sonoridade elegante e um pouco misteriosa. <b class="cmt-txtprimary">${getTranslatedChord("chord-Gb")} ${getTranslatedMajMin("major")}</b> é conhecida por sua fluidez e riqueza tímbrica, sendo associada a obras virtuosas e brilhantes. </p>
        <p> <b class="cmt-txtsecondary">${getTranslatedChord("chord-Eb")} ${getTranslatedMajMin("minor")}</b>, sua relativa menor, tem um caráter sombrio, intenso e compacto. É uma tonalidade que permite explorar emoções densas e contrastes dramáticos. Ambas são apreciadas por pianistas avançados pela complexidade visual e expressiva. </p>
        <p> Exemplos: <b class="cmt-txtprimary">Estudo Op. 10 No. 5 "Teclas Pretas" – Chopin</b>, <b class="cmt-txtsecondary">Prelúdio Op. 28 No. 14 – Chopin</b> </p>`,


        CbAbm: () => `<p> <b class="cmt-txtprimary">${getTranslatedChord("chord-Cb")} ${getTranslatedMajMin("major")}</b> e <b class="cmt-txtsecondary">${getTranslatedChord("chord-Ab")} ${getTranslatedMajMin("minor")}</b> têm uma armadura com sete bemóis: <b>${getTranslatedChord("chord-Bb")}</b>, <b>${getTranslatedChord("chord-Eb")}</b>, <b>${getTranslatedChord("chord-Ab")}</b>, <b>${getTranslatedChord("chord-Db")}</b>, <b>${getTranslatedChord("chord-Gb")}</b>, <b>${getTranslatedChord("chord-Cb")}</b> e <b>${getTranslatedChord("chord-Fb")}</b>. Essa estrutura harmônica as torna as tonalidades mais complexas de ler dentro do sistema tonal. Por isso, costumam ser substituídas por suas enarmônicas: <b>${getTranslatedChord("chord-B")} ${getTranslatedMajMin("major")}</b> e <b>${getTranslatedChord("chord-G#")} ${getTranslatedMajMin("minor")}</b>, que soam igual mas são mais fáceis de escrever e ler. </p>
        <p> Apesar de sua raridade, essas tonalidades existem e podem aparecer em modulações ou contextos teóricos específicos. Seu uso pode refletir decisões harmônicas, notacionais ou estilísticas muito particulares. Representam o fechamento do círculo tonal e completam a lógica do sistema de armaduras. </p>`,

    },
}

function updateCmtTexts(){
    let id = globalSelectedIDForTexts.replaceAll("#", "s");

    const element_keySignatures_selected = document.getElementById('cstSelected');
    element_cmt_title.textContent = element_keySignatures_selected.textContent;

    if (cmt[lang] && typeof cmt[lang][id] === 'function') {
        element_cmt_description.innerHTML = cmt[lang][id]();
    } else {
        console.warn("No hay texto disponible para esa tonalidad");
        console.warn(id);
    }
}

element_cmt_description.innerHTML = cmt.en["CAm"];

function getTranslatedChord(key) {
    switch(langNotation) {
        case "en": 
          if (key == "chord-C") {return "C";}
          if (key == "chord-D") {return "D";}
          if (key == "chord-E") {return "E";}
          if (key == "chord-F") {return "F";}
          if (key == "chord-G") {return "G";}
          if (key == "chord-A") {return "A";}
          if (key == "chord-B") {return "B";}

          if (key == "chord-C#") {return "C#";}
          if (key == "chord-D#") {return "D#";}
          if (key == "chord-E#") {return "E#";}          
          if (key == "chord-F#") {return "F#";}
          if (key == "chord-G#") {return "G#";}
          if (key == "chord-A#") {return "A#";}
          if (key == "chord-B#") {return "B#";}          

          if (key == "chord-Cb") {return "Cb";}
          if (key == "chord-Db") {return "Db";}
          if (key == "chord-Eb") {return "Eb";}
          if (key == "chord-Fb") {return "Fb";}          
          if (key == "chord-Gb") {return "Gb";}
          if (key == "chord-Ab") {return "Ab";}
          if (key == "chord-Bb") {return "Bb";}
        case "es": 
          if (key == "chord-C") {return "Do";}
          if (key == "chord-D") {return "Re";}
          if (key == "chord-E") {return "Mi";}
          if (key == "chord-F") {return "Fa";}
          if (key == "chord-G") {return "Sol";}
          if (key == "chord-A") {return "La";}
          if (key == "chord-B") {return "Si";}

          if (key == "chord-C#") {return "Do#";}
          if (key == "chord-D#") {return "Re#";}
          if (key == "chord-E#") {return "Mi#";}
          if (key == "chord-F#") {return "Fa#";}
          if (key == "chord-G#") {return "Sol#";}
          if (key == "chord-A#") {return "La#";}
          if (key == "chord-B#") {return "Si#";}

          if (key == "chord-Cb") {return "Dob";}
          if (key == "chord-Db") {return "Reb";}
          if (key == "chord-Eb") {return "Mib";}
          if (key == "chord-Fb") {return "Fab";}
          if (key == "chord-Gb") {return "Solb";}
          if (key == "chord-Ab") {return "Lab";}
          if (key == "chord-Bb") {return "Sib";}
        case "pt": 
          if (key == "chord-C") {return "Dó";}
          if (key == "chord-D") {return "Ré";}
          if (key == "chord-E") {return "Mi";}
          if (key == "chord-F") {return "Fá";}
          if (key == "chord-G") {return "Sol";}
          if (key == "chord-A") {return "Lá";}
          if (key == "chord-B") {return "Si";}

          if (key == "chord-C#") {return "Dó#";}
          if (key == "chord-D#") {return "Ré#";}
          if (key == "chord-E#") {return "Mi#";}
          if (key == "chord-F#") {return "Fá#";}
          if (key == "chord-G#") {return "Sol#";}
          if (key == "chord-A#") {return "Lá#";}
          if (key == "chord-B#") {return "Si#";}

          if (key == "chord-Cb") {return "Dób";}
          if (key == "chord-Db") {return "Réb";}
          if (key == "chord-Eb") {return "Mib";}
          if (key == "chord-Fb") {return "Fab";}
          if (key == "chord-Gb") {return "Solb";}
          if (key == "chord-Ab") {return "Láb";}
          if (key == "chord-Bb") {return "Sib";}          
    }
}

function getTranslatedMajMin(key) {
    switch(lang) {
        case "en":
            if (key == "major") {return "Major";}
            if (key == "minor") {return "Minor";}
        case "es":
            if (key == "major") {return "Mayor";}
            if (key == "minor") {return "Menor";}
        case "pt":
            if (key == "major") {return "Maior";}
            if (key == "minor") {return "Menor";}
    }
}