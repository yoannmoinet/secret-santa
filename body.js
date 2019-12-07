module.exports = ({ santa, kid }) => `
    <h1>Ho Ho Ho!</h1>
    <p>Bonjour <b>${santa.name}</b>, j'ai une mission très importante pour toi.<br/>
    Cette année, je ne vais pas pouvoir donner de cadeau 🎁 à tout le monde, c'est pourquoi j'ai besoin de ton aide 🙏<br/>
    Je vais t'attribuer un enfant 👶 auquel tu devras offrir un cadeau toi même!</p>
    <p>&nbsp;</p>
    <p><b>⚠️ Mais attention! ⚠️</b> Il y a 2 règles très importantes à suivre:
    <ul>
        <li>Il ne doit pas savoir que ça ne vient pas de moi 🎅</li>
        <li>Le cadeau doit rentrer dans un budget de 10€ 💵</li>
    </ul>
    </p>
    <p>&nbsp;</p>
    <p>Sans plus attendre 🥁, cette année, tu devras offrir un cadeau à:
    <h2>🎇 ${kid.name} 🎇</h2>
    </p>
    <p>&nbsp;</p>
    <p>Merci beaucoup pour ton aide.<br/>
    Tu auras un joli cadeau toi aussi (ou tout pourri, on verra).
    <h1>🎄 Joyeux Noël!</h1>
    </p>
    <p>&nbsp;</p><p>&nbsp;</p>
    <p><i color="#333333">Le <b>VRAI</b> Père Noël 🎅</i></p>
`;
