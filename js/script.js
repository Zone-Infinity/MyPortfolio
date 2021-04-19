let theme = localStorage.getItem('theme')

var githubStats = "https://github-readme-stats.codestackr.vercel.app/api?username=zone-infinity&show_icons=true&hide_border=true"
var githubStreaks = "https://github-readme-streak-stats.herokuapp.com/?user=zone-infinity&hide_border=true"

if (theme == null) {
    setTheme("light")
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode

        setTheme(mode)
    });
}

function setTheme(mode) {
    let theme = document.getElementById("theme-style")
    let githubStat = document.getElementById("github-stats")
    let githubStreak = document.getElementById("github-streaks")
    let heart = document.getElementById("heart")

    if (mode === "light") {
        theme.href = "styles/default.css"
        githubStat.src = githubStats
        githubStreak.src = githubStreaks
        heart.innerHTML = "❤️"
    }

    if (mode === "blue") {
        theme.href = "styles/blue.css"
        githubStat.src = githubStats + "&theme=tokyonight"
        githubStreak.src = githubStreaks + "&theme=tokyonight"
        heart.innerHTML = "💙"
    }

    if (mode === "green") {
        theme.href = "styles/green.css"
        githubStat.src = githubStats + "&theme=merko"
        githubStreak.src = githubStreaks + "&theme=merko"
        heart.innerHTML = "💚"
    }

    if (mode === "purple") {
        theme.href = "styles/purple.css"
        githubStat.src = githubStats + "&theme=synthwave"
        githubStreak.src = githubStreaks + "&theme=synthwave"
        heart.innerHTML = "💜"
    }

    localStorage.setItem("theme", mode)
}
