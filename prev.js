var situations = [{
	situation : "Mélanie remarque un article qui revient souvent sur facebook: 'L’humanité menacée d’extinction après que les rhinocéros ont découvert que la peau humaine était aphrodisiaque. Le Gorafi, elle décide de le lire.",
	resA : "Cet article est vrai et Mélanie part prévenir tous ses ami(e)s du Danger.",
	resB : "Elle rigole, et se rend compte que ce journal n’est pas un vrai.",
	response : "resB",
	ifResA : "Dommage, cet article est faux! Au moins, elle aurait fait rigoler ses ami(e)s !",
	ifResB : "Et oui, toutes les informations sur internet ne sont pas à prendre au pied de la lettre ! Fais toi ton propre avis !",
	genre : "recherche.jpg"
},
{
	situation: "Un copain de facebook, vient dans le Gers en vacance et t’invite à venir passer du temps avec lui. Tu lui fais confiance ou pas ?",
	resA: "Tu es sûre que c’est un ami, tu peux lui faire confiance et aller le voir.",
	resB: "Tu n’es pas sûre de toi, donc tu préfère en parler à tes parents et/ou éducateurs. Et voir ce que tu dois faire avec eux.",
	response: "resB",
	ifResA: "C’est con...ton “ami” était un serial killer... tu est mort dans d’horribles souffrances après avoir été séquestré pendant des semaines...",
	ifResB: "Fait très attention aux rendez-vous que tu prends sur Internet ! Tu peux te retrouver dans de très mauvaises situations (violences, vols, viols…), même si ce sont des 'ami(e)s' qui te proposent ce rendez-vous. Alors, parles-en à tes parents et ils te diront si tu peux y aller où s’ils viendront avec toi la première fois.",
	genre : "reseauSociaux.jpg",
},
{
	situation: "Lors de tes discussions sur les réseaux sociaux, tu rentres en communication avec un pote que tu as rencontré lors d’une fête entre ami(e)s. Puis, tu te rends compte qu’il te demande beaucoup d’infos persos sur toi et d’autres potes…",
	resA: "Ce type est chelou, tu réfléchis et commences à lui poser des questions, ce qui le mets sur la défensive. Sur ce, tu préfère arrêter la communication.",
	resB: "Tu continus la communication. Après tout, ce type avait l’air sympa lors de la fête...",
	response: "resA",
	ifResA: "Si une personne que je ne connais pas et/ou mal, dans la vraie vie me demande des informations sur moi ou sur quelqu'un d’autre, un service, de l’argent, d’allumer la webcam, d’appeler un numéro de téléphone inconnu ou d’envoyer des photos, j’arrête tout de suite la communication, je me déconnecte et j’en parle immédiatement à mes parents.",
	ifResB: "Dommage, ce “pote” est connu des services de polices pour des délits de cambriolages. Vu que tu lui as dit que tu partais voir de la famille ce week-end et que personnes sera chez toi… il est venu te rendre visite...et t’a chouré ta playstation ainsi que tous les ordis portables de la maison.",
	genre : "hack.jpg",
},
{
	situation:"Josiane vient de voir sur youtube une vidéo d’une personne qui a inventé une application qui permet d'avoir une balance sur smartphone pour peser de gros volume (par exemple une personne ).",
	resA:"Contente d’avoir découvert cette application, elle décide de l’installer sur son smartphone et de se peser de suite en montant sur le smartphone.",
	resB:"Cette vidéo est surement un fake ! Un téléphone ne peut pas peser une personne",
	response:"resB",
	ifResA:"Oh bah dit donc, le téléphone s’est brisé lorsqu’elle a mit une partie de son poids sur le téléphone,c’est vraiment dommage elle va devoir se racheter un nouveau téléphone ",
	ifResB:"Toutes les vidéo sur youtube ou autres sites sur internet ne sont pas forcément vraies ! Il faut avoir un regard critique sur ce que l’on voit.",
	genre:"recherche.jpg"
},
{
	situation: "Tu passe beaucoup de temps sur ton compte facebook. En effet, cela te permets de vider ton esprit, de partager tes expériences et c’est ton plaisir.",
	resA: "Tu partages tes photos, tes expériences et tes opinions en ayant confiance dans ce que tu fais. Après tout, tu acceptes l’invitation des personnes dont tu es sûre.",
	resB: "Certes, tu passe beaucoup de temps sur facebook. Mais lorsqu’il s’agit de partager tes ressentis, des photos de toi, de tes potes et de ta famille, même qu'à des personnes connus, tu restes très prudent(e) et tu réfléchis vraiment avant de poster quelque chose.",
	response: "resB",
	ifResA: "La diffusion Internet est incontrôlable. Même en prenant le plus de précautions possible. Une personne mal intentionnée peut retourner tes arguments contre toi et utiliser tes photos/vidéos à ton détriment et au détriment des personnes que tu aimes.",
	ifResB:  "C’est bien que tu réfléchisses avant de publier quelque chose. Sur Internet tout le monde peut voir ce que tu met en ligne (photo, infos, opinions). Ne publie pas de photos gênantes de tes amis ou toi-même car leur diffusion est incontrôlable. Ton blog ou ton compte Facebook ne sont pas TON JOURNAL INTIME !",
	genre : "droit.jpg"
},
{
	situation: "Tu souhaites t’inscrire sur les réseaux sociaux. Pour cela tu dois remplir des formulaires.",
	resA: "C’est la énième fois que tu dois remplir des formulaires, tu en a marre… tu ne te prends pas la tête et mets la même adresse et le même code partout.",
	resB:  "C’est la énième fois que tu dois remplir des formulaires, tu en a marre… mais étant plus ou moins au courant de la sécurité Internet tu choisis des mots de passe et des adresses mails différentes.",
	response: "resB",
	ifResA: "Un hacker passant par là… a récupéré le mot de passe et l’adresse email que tu as utilisé pour ton blog. Or, comme tu as utilisé bêtement les mêmes partout, toutes tes infos persos ont étée volées et ton ordi est HS.",
	ifResB: "Tu créais plusieurs adresses électroniques qui sont différentes en fonction de tes activités : personnelles, professionnelles, associatives, ou sociales. Et tu, ne communiques pas tes mots de passe ! Et les choisis un peu compliqués (Ps: N'utilise jamais ta date de naissance ou ton nom/surnom).",
	genre : "droit.jpg"
},
{
	situation: "Florian joue à un jeu sur son téléphone mobile et souhaite avoir gratuitement des gemmes qui normalement sont payantes en euro.",
	resA:"Il télécharge sur internet une application formidable qui lui propose des gemmes illimités",
	resB:"Il sait que les applications de ce genre sont malveillantes",
	response:"resB",
	ifResA: "Quel dommage le téléphone de Florian s’est éteint dès qu’il a lancer l’application sur son téléphone et lorsqu’il a allumé, des pinguoins se sont mit à danser sur son fond d’écran",
	ifResB:"Il faut se doutait qu’une application de ce genre est créé par un hacker et que s’il offre son application, c’est qu’il y a un fond de malveillance par derrière",
	genre : "arnaques.png"
},
{
	situation: "Arthur souhaite regarder le dernier film qui vient de sortir au cinéma.",
	resA:"Il decide d'aller sur un site de téléchargement pour obtenir ce film.",
	resB:"Il décide d’attendre la sortie officielle de ce film en DVD pour l’acheter avec les sous qu’il aura économisé pour.",
	response : "resB",
	ifResA:"Dommage pour les parents d’Arthur, il vient de se faire attraper pour avoir télécharger ce film et maintenant ils doivent payer une amende de 1500€.Les parent d’Arthur sont content de payer un film 1500€ au lieu de 20€ ! ",
	ifResB:"Arthur évite d’une part des problèmes pour ces parents et sauve son ordinateur d’une mort certaine.", 
	genre : "droit.jpg"
},
{
	situation: "Cela fait plusieurs semaines que le petit-copain de Lily lui fait des avances insistantes via Internet. Il lui demande de faire des choses très osées.",
	resA: "Elle refuse catégoriquement de faire quoi que ce soit. Elle en parle à un quelqu’un de confiance. Et sur les conseils de ses potes le quitte. ",
	resB: "Amoureuse, elle cède à ses demandes à contre coeur.",
	response: "resA",
	ifResA: "La pornographie a un impact indéniable sur les violences faites aux femmes : la banalisation et la légitimation de rapports violents.",
	ifResB: "NE CÈDE JAMAIS À UN CHANTAGE SEXUEL ! En plus de te sentir humilié, ce genre d’acte peut être puni par la loi." ,
	genre : "porn.jpg",
},
{
	situation :  "Julien a appris que le sexe sert à faire des bébés et veux en savoir plus.",
	resA : "Il demande plus d’informations aux adultes qui l’entourent, même si ça le gêne.",
	resB : "Il lance une recherche internet et tombe sur des sites pornographiques. Autant apprendre seul ! ",
	response : "resA",
	ifResA : "Tu peux en parler avec tes parents, ou même les éducateurs. Il faut choisir le bon moment et le bon endroit pour pouvoir parler librement.",
	ifResB : "Le jour où tu voudras apprendre à conduire...  regarder en boucle toute la série des  « TAXI », 1, 2, 3 et 4  ne t’aidera pas vraiment pour passer ton permis de conduire ! Eh bien la pornographie, c’est pareil, c’est de la fiction !",
	genre : "porn.jpg",
},
{
	situation : "Julie a télécharger illégalement quelques musiques de son groupe préféré. Puis, son ordinateur se bloque et un message d’Hadopi apparaît: ‘Vous avez téléchargé illégalement, vous devez payer une amende de 350€ si vous voulez récupérer votre ordinateur’",
	resA : "Julie doit payer tout de suite ! Elle veut garder son ordinateur qui est devenu inutilisable et ne voulais pas transgresser la loi.",
	resB : "Julie se méfie quand même et explique son erreur à un adulte !",
	response : "resB",
	ifResA : "Dommage, ce message d’Hadopi était un hacking, une personne mal-attentionnée à pris le contrôle de ton ordinateur et de tes données pour te soutirer de l’argent.",
	ifResB : "Bien joué, ce message d’Hadopi était un hacking et ils voulaient te soutirer de l’argent.",
	genre : "arnaques.png",
},
{
	situation: "Une mère de famille reçoit un sms de sa banque avec un lien vers le site Internet pour des mises à jour.", 
	resA: "Le message vient de sa banque, elle peut suivre le lien et faire les modifs.",
	resB: "Elle contacte sa banque pour plus d’informations.",
	response: "resB",
	ifResA: "Elle clique sur le lien. C’est con… le site était un faux, un hacker lui a vider son compte… mourant de faim la famille n’a pas eu d’autre choix que de bouffer le chien et le petit dernier...",
	ifResB: "Soyez attentif lorsque votre service de banque en ligne est ouverte. Vous devez savoir quand et comment le système vous demandera de vous identifier, que ce soit lors de la connexion ou au moment de valider une transaction. Si vous voyez des demandes d'authentification à des moments inhabituels, n'entrez pas vos données et contactez votre banque.",
	genre : "arnaques.png",
},
{
	situation: "Au collège, un incident assez violent a éclaté entre Nicolas et ton pote Damien. Apparemment, Damien en voudrait à Nicolas et il veut se venger de lui. Il veut lui pourrir la vie sur Internet.",
	resA: "Tu rigoles en même temps que Damien rédige de fausses rumeurs sur les réseaux sociaux. Et toi et tes potes relayez tout.", 
	resB: "Au début tu rigoles, puis tu calme le jeu, mais comme tu vois que Damien est sérieux tu préfère prevenir un adulte.",
	response: "resB",
	ifResA: "Les fausses rumeurs se sont incontrôlablement propagées. Sous la pression Nicola a fait une tentative de suicide.", 
	ifResB: "Tu as bien fait. Le cyber-harcèlement est puni par la loi, au même titre que le harcèlement classique. Les premiers responsables en cas de harcèlement en ligne sont les auteurs des propos en cause. Un intermédiaire ne sera responsable que si : il a eu connaissance des messages publiés, et s'il n'a pas agi rapidement pour faire retirer ses messages dès qu'il en a eu connaissance.(www.service-public.fr)",
	genre : "cyberHarcelement.jpg",

},
{
	situation: "Un père de famille laisse sa tablette entre les mains de ses enfants sans surveillance particulière.",
	resA: "Et alors, il n’y a pas de dangers... ce ne sont que des jeux…",
	resB: "Ce n’est pas une bonne idée. Les enfants ne devraient pas être sans surveillance même sur Internet.",
	response: "resB",
	ifResA: "L’un des deux a l’idée d’aller chercher des jeux sur Google. Malheureusement, ils voient du contenu pronographique. Sous le choc, l’un des deux meurt d’arrêt cardiaque et l’autre se défenestre s'empalant sur la balustrade du voisin.",
	ifResB: "Ne laissez pas les jeunes enfants seuls sur Internet: 90% des enfants ont été au moins une fois confrontés à des contenus inadaptés. Signalez les images et propos pédopornographiques sur le site http://internet-signalement.gouv.fr qui est géré par la police. Plusieurs millions d’images pédopornographiques circulent en permanence sur le Web.",
	genre : "controlParental.jpeg",
},
{
	situation: "Des parents laissent leurs enfants passer toute la journée sur l’ordi, au point qu’ils ne font que ça.",
	resA: "Il n’y a pas de problème. C’est leur choix.",
	resB: "Ils essaient de les motiver pour faire autre chose. Et établissent des règles pour le temps de connexion.",
	response: "resB",
	ifResA: "A force de passer du temps sur Internet, un des enfant à eu le cerveau liquéfié. L’autre a fait une crise d’épilepsie et a commencé à voir des hélicopter en liège partout. Et l’autre s’est perdu dans les toilettes.",
	ifResB: "Limitez le temps consacré aux écrans: 45% des enfants de 6 à 11 ans consacrent plus de la moitié de leur temps de loisirs aux écrans: Tv, Internet, jeux vidéo… ce qui peut nuire à la concentration scolaire.",
	genre : "controlParental.jpeg"
},
{
	situation : "Mona reçoit un mail de sa cousine, lui expliquant qu’elle a gagné 1500€ en répondant à un simple questionnaire en ligne! Elle lui conseil de faire vite car le tirage au sort est tous les jours à 19h.",
	resA : "Mona tente sa chance, forcement, c’est pas rien 1500€ ! Et si sa cousine a gagné, c’est que le site est sûre!",
	resB : "Mona téléphone à sa cousine, pour avoir toutes les informations avant de s’inscrire.",
	response : "resB",
	ifResA : "Grâce aux informations entrer dans le formulaire, le compte en banque de Mona a été vidé et son identité a été volée. Le voleur a aussi transmis le mail à tous ses contacts et tente d’arnaquer avec ses proches.",
	ifResB : "La cousine de Mona n’a jamais rien gagné! Elle se rendent compte alors que ce n'était qu’une arnaque !",
	genre : "hack.jpg"
},
{
	situation: "Cela fait quelque temps que tu remarques qu’un de tes pote à changer de comportement. Il se renferme sur lui-même, a des opinions de plus en plus tranché, surfe tout le temps sur les réseaux sociaux et s’éloigne de toi.",
	resA: "Tu t’inquiètes, tu essaies de lui parler et tu parles de tes inquiétudes à un adulte.",
	resB: "Il a le droit de penser ce qu’il veut... c’est pas à toi de gérer ses problèmes.",
	response: "resA",
	ifResA: "Dans la lutte contre le terrorisme et la radicalisation, le Gouvernement a ouvert deux comptes « Stop Djihadisme » sur Twitter et sur Facebook. Les réseaux sociaux constituent un outil incontournable, en relayant les messages tu contribueras à affaiblir la propagande.",
	ifResB: "Ton pote a fait un gros kebab à la sortie de l’école… il s’est fait exploser. Des dizaines de gamins sont morts et d’autres ont été bléssé. D'ailleurs, un doigt n’a toujours pas été identifié…",
	genre : "radicalisation.jpg"
},
{
	situation: "Parce que bon élève Charles est le bouc émissaire de sa classe. Et un soir où il était dans sa chambre, il se rend compte que quelqu’un a posté des photos dégradantes de lui sur Internet. Le lendemain, tu vois toute la classe se moquer de lui.",
	resA: "Tu as mal pour lui et même si tu ne l’apprécie pas trop tu préfères prévenir un adulte.",
	resB: "C’est pas ton problème. A vraie dire, tu trouves les photos plutôt kiffantes.",
	response: "resA",
	ifResA: "Les cyberviolences n’ont pas de limite temporelle : elles peuvent s’exercer à toute heure du jour ou de la nuit et laissent des traces numériques (une photo publiée peut demeurer très longtemps sur Internet). L’auteur lui-même, une fois les agressions publiées sur la toile, ne peut maîtriser la diffusion des contenus.",
	ifResB: "La diffusion des photos est devenu incontrôlable. Charles a pété le plombs et a commencé à manger de la craie pour calmer ses angoisses.",
	genre : "cyberHarcelement.jpg",
},
{
	situation: "Une pote à toi a été accusé d’avoir insulté vos camarades de classe sur Facebook, toi y compris. Or, elle n’a plus accès à son compte.",
	resA:  "Tu lui demandes des explications, ne la croit pas et l’envoie bouler.",
	resB: "Tu lui demandes des explications et vas vérifier sa connexion Facebook avec elle.",
	response: "resB",
	ifResA:  "Son compte a été piraté. Elle a dû en faire part à ses parents qui ont pris les mesures nécessaires. Par contre, elle a perdu confiance en toi... ",
	ifResB: "En allant vérifier sa connexion Facebook tu te rends compte que quelqu’un a piraté son compte à des fins malveillantes. Puis vous allez avertir un adulte.",
	genre : "cyberHarcelement.jpg",
},
{ 
	situation: "Cela fait quelque temps que l’ambiance se dégrade au collège, il semble qu’une guerre a éclatée sur les réseaux sociaux. Bagarres, insultes et provocations font partie du quotidien.",
	resA: "T’es au courant tu reçois pleins de messages insultants et tu essaies de calmer le jeu comme tu peux.",
	resB:   "T’es comme un fou... Tu t’éclates à envenimer la situation. ",
	response: "resA",
	ifResA: "C’est un bon début, et savais-tu que 40% des élèves avouent avoir subi une agression en ligne et 85% des faits de harcèlement ont lieu dans le cadre d’un groupe. Le cyber-harcèlement est l’affaire de tout le monde.",
	ifResB: "La situation a continuée à s’empirer comme-suit: un allumé, une kalash et Oups... t’es mort...",
	genre : "cyberHarcelement.jpg"
},





];
