var situations = [{
	situation : "Mélanie remarque un article qui revient souvent sur facebook: 'L’humanité menacée d’extinction après que les rhinocéros ont découvert que la peau humaine était aphrodisiaque. Le Gorafi' Elle décide de le lire.",
	resA : "Cet article est vrai et Mélanie pars prévenir tous ses amis du danger.",
	resB : "Elle rigole, et se rend compte que ce journal n’est pas un vrai.",
	response : "resB",
	ifResA : "Dommage, cet article est faux! Au moins, elle auras fait rire ses amis!",
	ifResB : "Et oui, toutes les informations sur internet ne sont pas à prendre au pied de la lettre ! Fais toi ton propre avis!",
	genre : "recherche.jpg"
},
{
	situation: "Un copain de facebook, vient dans le gers en vacance et t’invite à venir passer du temps avec lui.Tu lui fais confiance ou pas?",
	resA: "Tu es sûr que c’est un ami, tu peux lui faire confiance et aller le voir.",
	resB: "Tu n’es pas sûr de toi, donc tu préfère en parler à tes parents et/ou éducateurs. Et voir se que tu dois faire avec eux.",
	response: "resB",
	ifResA: "C’est con...ton “ami” était un serial killer... tu est mort dans d’horrible souffrance après avoir été séquestré pendant des semaines...",
	ifResB: "Fais très attention aux rendez-vous que tu prends sur Internet! Tu peux te retrouver dans de très mauvaises situations (violence, vols, viols…), même si ce sont des 'amis' qui te proposent ce rendez-vous. Alors, parles-en à tes parents et ils te diront si tu peux y aller où s’ils viendront avec toi la première fois.",
	genre : "reseauSociaux.jpg"
},
{
	situation: "Lors de tes discussions sur les réseaux sociaux, tu rentres en communication avec un pote que tu as rencontré lors d’une fête entre amis. Puis, tu te rends compte qu’il te demande beaucoup d’infos perso, sur toi et d’autres potes…",
	resA: "Ce type est chelou, tu réfléchis et commences à lui poser des questions, ce qui le mets sur la défensive. Sur ce, tu préfére arrếter la communication.",
	resB: "Tu continus la communication. Après tout, ce type avait l’air sympa lors de la fête...",
	response: "resA",
	ifResA: "Si une personne que je ne connais pas et/ou mal, dans la vraie vie me demande des informations sur moi ou sur quelqu'un d’autre, un service, de l’argent, d’allumer la webcam, d’appeler un numéro de téléphone inconnu ou d’envoyer des photos,  j’arrête tout de suite la communication, je me déconnecte et j’en parle immédiatement à mes parents.",
	ifResB: "Dommage, ce “pote” est connu des services de polices pour des délits de cambriolages. Vu que tu lui as dit que tu parter voir de la famille ce week-end et que personnes sera chez toi… il est venu te rendre visite...et t’a chouré ta playstation ainsi que tout les ordis portables de la maison.",
	genre : "hack.jpg",
},
{
	situation:"Josiane vient de voir sur youtube une vidéo d’une personne qui a inventé une application qui permet au smartphone de faire balance pour peser de gros volume (par exemple, une personne ).",
	resA:"Contente d’avoir découvert cette application elle décide de l’installer sur son smartphone et de se peser de suite en ce mettant sur le smartphone.",
	resB:"Cette vidéo est surement un fake un téléphone ne peut pas peser une personne",
	response:"resB",
	ifResA:"Oh bah dit donc, le téléphone s’est brisé lorsqu’elle a mit une partie de son poid sur le téléphone,c’est vraiment dommage elle doit racheter un nouveau téléphone ",
	ifResB:"Toute les vidéo sur youtube ou autre site sur internet ne son pas forcement vrai il faut avoir un regard critique sur ce que l’on voit.",
	genre:"recherche.jpg"
},
{
	situation: "Tu passe beaucoup de temps sur ton compte facebook. En effet, pour toi cela te permets de vider ton esprit, de partager tes expériences et c’est ton plaisir.",
	resA: "Tu partage tes photos, tes expériences et tes opinions en ayant confiance dans ce que tu fais. Après tout, tu n’accepte l’invitation que des personnes dont tu es sûr.",
	resB: "Certes, tu passe beaucoup de temps sur facebook. Mais lorsqu’il s’agit de partager tes ressentis, des photos de toi, de tes potes et de ta famille, même qu'à des personnes connus, tu restes très prudent(e) et tu réfléchis vraiment avant de poster quelque chose.",
	response: "resB",
	ifResA: "La diffusion Internet est incontrôlable. Même en prenant le plus de précautions possible. Une personne mal intentionné peut retourner tes arguments contre toi et utiliser tes photos/vidéos à ton détriment et au détriment  des personnes que tu aimes.",
	ifResB:  "C’est bien que tu réfléchisses avant de publier quelque chose. Sur Internet tout le monde peut voir ce que tu met en ligne (photo, infos, opinions). Ne publie pas de photos gênantes de tes amis ou toi-même car leur diffusion est incontrôlable. Ton blog ou ton compte Facebook ne sont pas TON JOURNAL INTIME!",
	genre : "droit.jpg"
},
{
	situation: "Tu souhaites t’inscrire sur les réseaux sociaux. Pour cela tu dois remplir des formulaires.",
	resA: "C’est la énième fois que tu dois remplir des formulaires, tu en a marre… tu ne te prends pas la tête et mets la même adresse et le même code partout.",
	resB:  "C’est la énième fois que tu dois remplir des formulaires, tu en a marre…mais étant plus ou moins au courant de la sécurité Internet tu choisis des mots de passe et des adresses mails différentes.",
	response: "resB",
	ifResA: "Un hacker passant par là… as récupéré le mot de passe et l’adresse email que tu as utilisé pour ton blog. Or, comme tu as utilisé bêtement les mêmes partout, toutes tes infos persos ont été volée et ton ordi est HS.",
	ifResB: "Tu créais plusieurs adresses électroniques qui sont différentes en fonction de tes activités : personnelles, professionnelles, associatives, ou sociales. Et tu, ne communiques pas tes mots de passe ! Et les choisis un peu compliqués (ps:n'utilise jamais ta date de naissance ou ton nom/surnom).",
	genre : "droit.jpg"
},
{
	situation: "Florian joue à un jeu sur téléphone mobile et souhaite avoir gratuitement des gemmes qui normalement sont payante en euro.",
	resA:"Il télécharge sur internet une application formidable qui lui propose gemme illimité",
	resB:"Il sait que les application de ce genre sont malveillante",
	response:"resB",
	ifResA: "Quel dommage le téléphone de Florian s’est éteint  dès qu’il a lancer l’application sur son téléphone et lorsqu’il a allumé le son, des pinguoin se sont  mit  à danser sur son fond d’écran",
	ifResB:"Il faut se douter qu’une application de ce genre est créé par un hacker  et que s’il offre son application c’est qu’il y a un fond de malveillance par derrière",
	genre : "arnaques.png"
},
{
	situation: "Arthur souhaite regarder le dernier film qui vient de sortir au cinéma.",
	resA:"Il decide d'aller sur un site de téléchargement pour obtenir ce film.",
	resB:"Il décide d’attendre la sortie de ce film en DVD pour l’acheter avec les sous qu’il aura économisé pour.",
	response : "resB",
	ifResA:"Dommage pour les parents d’Arthur, il vient de se faire attraper à avoir télécharger ce film et maintenant ils doivent payer une amende de 1500€.Les parent d’Arthur sont content de payer un film 1500€ au lieu de 20€ ! ",
	ifResB:"Arthur évite d’une part des problèmes pour ces parents et sauve son ordinateur d’une mort certaine.", 
	genre : "droit.jpg"
}





















]
