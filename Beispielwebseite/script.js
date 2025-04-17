document.addEventListener('DOMContentLoaded', function () {
    const fortunes = [
        "Du wirst bald eine positive Überraschung erleben.",
        "Ein Lächeln ist die beste Antwort.",
        "Geduld bringt Rosen.",
        "Vertraue auf deine Intuition.",
        "Ein neuer Anfang erwartet dich.",
        "Gutes kommt zu denen, die warten.",
        "Ein großes Abenteuer steht vor der Tür.",
        "Deine Freundlichkeit wird belohnt werden.",
        "Der Erfolg ist näher, als du denkst.",
        "Das Glück ist auf deiner Seite.",
        "Glaube an dich selbst.",
        "Deine Bemühungen werden bald belohnt.",
        "Ein neues Abenteuer wartet auf dich.",
        "Teile dein Glück mit anderen.",
        "Du wirst eine unerwartete Nachricht erhalten.",
        "Vertrauen ist der Schlüssel zum Erfolg.",
        "Harte Arbeit zahlt sich aus.",
        "Ein Freund wird dir bald helfen.",
        "Eine Reise bringt neue Erkenntnisse.",
        "Folge deinem Herzen.",
        "Das Glück ist auf deiner Seite.",
        "Nimm dir Zeit für dich selbst.",
        "Heute ist ein guter Tag für neue Herausforderungen.",
        "Geduld wird dir Erfolg bringen.",
        "Du wirst bald eine wichtige Entscheidung treffen.",
        "Bleib optimistisch, die besten Dinge kommen noch.",
        "Erfolg liegt in deiner Zukunft.",
        "Heute ist der erste Tag deines neuen Lebens.",
        "Eine positive Einstellung führt zum Erfolg.",
        "Ein unerwarteter Gast wird Freude bringen.",
        "Freundlichkeit wird dir bald begegnen.",
        "Etwas Wunderbares wird dir passieren.",
        "Du wirst bald stolz auf deine Leistungen sein.",
        "Glück wird deine Bemühungen begleiten.",
        "Vertraue dem Prozess, alles kommt zur richtigen Zeit.",
        "Liebe wird den Weg weisen.",
        "Veränderungen führen zu Wachstum.",
        "Gute Dinge brauchen Zeit.",
        "Eine neue Perspektive wird dir neue Wege öffnen.",
        "Du bist auf dem richtigen Weg."
    ];

    const btn = document.getElementById('open-cookie-btn');
    const fortuneText = document.getElementById('fortune-text');
    const generatorBefore = document.querySelector('.generator-before');
    const generatorAfter = document.querySelector('.generator-after');
    const fortuneCookieMessage = document.getElementById('fortune-cookie-message');
    const socialButtons = document.getElementById('social-buttons');
    const facebookShareBtn = document.getElementById('facebook-share');
    const twitterShareBtn = document.getElementById('twitter-share');
    const instagramShareBtn = document.getElementById('instagram-share');

    let cookieOpened = false;

    btn.addEventListener('click', function () {
        if (cookieOpened) return;

        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const selectedFortune = fortunes[randomIndex];

        generatorBefore.style.display = 'none';
        generatorAfter.style.display = 'flex';

        fortuneCookieMessage.textContent = selectedFortune;

        cookieOpened = true;
        btn.disabled = true;
        btn.style.backgroundColor = "red";
        socialButtons.style.display = 'flex';

        const encodedFortune = encodeURIComponent(selectedFortune);
        facebookShareBtn.href = `https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com&quote=${encodedFortune}`;
        twitterShareBtn.href = `https://twitter.com/intent/tweet?text=${encodedFortune}`;
        instagramShareBtn.href = `https://www.instagram.com/?text=${encodedFortune}`; // Hinweis: Instagram-Sharing ist begrenzt
    });

    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', function () {
        window.location.href = 'https://gkberlin5.wordpress.com/?_gl=1%2Aekhiqi%2A_gcl_au%2ANjkxMDEyOTQ4LjE3MjczMzMwNzg.';
    });
});