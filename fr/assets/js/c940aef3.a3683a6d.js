"use strict";(self.webpackChunkwaurum_docstaff=self.webpackChunkwaurum_docstaff||[]).push([[406],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(k,o(o({ref:t},m),{},{components:a})):r.createElement(k,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6916:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>m,assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={"sidebar-position":3},o="\ud83d\udd28 Optimiser ton jeu",l={unversionedId:"garrys-mod/optimization",id:"garrys-mod/optimization",title:"\ud83d\udd28 Optimiser ton jeu",description:"Pertes de FPS ou probl\xe8mes visuels?",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/garrys-mod/optimization.mdx",sourceDirName:"garrys-mod",slug:"/garrys-mod/optimization",permalink:"/waurum-documentation/fr/docs/garrys-mod/optimization",draft:!1,editUrl:"https://github.com/Waurum-Studio/waurum-documentation/tree/main/packages/create-docusaurus/templates/shared/docs/garrys-mod/optimization.mdx",tags:[],version:"current",frontMatter:{"sidebar-position":3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfea Monter le contenu CSS",permalink:"/waurum-documentation/fr/docs/garrys-mod/mounting-content"},next:{title:"\u26a0\ufe0f Troubleshooting",permalink:"/waurum-documentation/fr/docs/garrys-mod/troubleshooting"}},s={},p=[{value:"Basculer sur la branche Chromium",id:"basculer-sur-la-branche-chromium",level:2},{value:"Changer de branche",id:"changer-de-branche",level:3},{value:"Ajustements avanc\xe9s",id:"ajustements-avanc\xe9s",level:2},{value:"Modifier les propri\xe9t\xe9s du jeu",id:"modifier-les-propri\xe9t\xe9s-du-jeu",level:3},{value:"Param\xe8tres vid\xe9o",id:"param\xe8tres-vid\xe9o",level:3},{value:"Options de lancement",id:"options-de-lancement",level:3},{value:"C&#39;est termin\xe9, ton jeu devrait \xeatre beaucoup plus fluide maintenant!",id:"cest-termin\xe9-ton-jeu-devrait-\xeatre-beaucoup-plus-fluide-maintenant",level:4}],m=e=>{let{children:t,color:a}=e;return(0,n.kt)("b",{style:{display:"inline-block",color:a}}," ",t," ")},u={toc:p,Highlight:m};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-optimiser-ton-jeu"},"\ud83d\udd28 Optimiser ton jeu"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pertes de FPS ou probl\xe8mes visuels?"),(0,n.kt)("br",{parentName:"p"}),"\n","Les astuces ci-dessous devrait permettre d'optimiser ton jeu."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"basculer-sur-la-branche-chromium"},"Basculer sur la branche Chromium"),(0,n.kt)("admonition",{title:"Qu'est ce que Chromium?",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Chromium est une branche alternative")," de Garry's mod qui poss\xe8de ",(0,n.kt)("strong",{parentName:"p"},"un moteur HTML am\xe9lior\xe9")," ainsi ",(0,n.kt)("strong",{parentName:"p"},"que les derni\xe8res mises \xe0 jour"),".",(0,n.kt)("br",{parentName:"p"}),"\n","Elle est connue pour apporter ",(0,n.kt)("strong",{parentName:"p"},"un boost de performance")," au prix de quelques rares crashs d\xfbs \xe0 son aspect ",(0,n.kt)("strong",{parentName:"p"},"experimentale"),".",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"La plupart des joueurs et des d\xe9veloppeurs l'utilise aujourd'hui.")," ")),(0,n.kt)("h3",{id:"changer-de-branche"},"Changer de branche"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Ouvre Steam"),", va dans ta ",(0,n.kt)("strong",{parentName:"li"},"biblioth\xe8que")," et ",(0,n.kt)("strong",{parentName:"li"},"clique sur Garry's mod")),(0,n.kt)("li",{parentName:"ol"},"Clique sur le ",(0,n.kt)("strong",{parentName:"li"},"bouton Param\xe8tres")," ",(0,n.kt)("em",{parentName:"li"},"(G\xe9rer)")," et clique sur ",(0,n.kt)("inlineCode",{parentName:"li"},"Propri\xe9t\xe9s..."),(0,n.kt)("img",{parentName:"li",src:"https://imgur.com/S470CzY.png",alt:"Bouton Param\xe8tres"})),(0,n.kt)("li",{parentName:"ol"},"Rend toi dans l'onglet ",(0,n.kt)("strong",{parentName:"li"},"BETAS")," dans la nouvelle fen\xeatre"),(0,n.kt)("li",{parentName:"ol"},"Dans la ",(0,n.kt)("strong",{parentName:"li"},"liste des B\xeatas"),", s\xe9lectionne la version ",(0,n.kt)("inlineCode",{parentName:"li"},"x86-x64 - Chromium + 64-bit binaries"),(0,n.kt)("img",{parentName:"li",src:"https://imgur.com/MCot4He.png",alt:"Onglet B\xeatas"})),(0,n.kt)("li",{parentName:"ol"},"Lorsque le t\xe9l\xe9chargement est termin\xe9 ",(0,n.kt)("em",{parentName:"li"},"(~150Mo)"),", c'est fini!")),(0,n.kt)("p",null,"D\xe9sormais quand tu lanceras le jeu, tu verras ",(0,n.kt)("strong",{parentName:"p"},"une pop-up de choix de version"),".",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"S\xe9lectionne l'option ",(0,n.kt)("inlineCode",{parentName:"strong"},"64-bit"))," et clique sur ",(0,n.kt)("strong",{parentName:"p"},"Jouer")," pour lancer Garry's mod.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://imgur.com/wC9EUDj.png",alt:"Pop-up des versions"})),(0,n.kt)("admonition",{title:"Revenir \xe0 la branche par d\xe9faut",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Lass\xe9 de Chromium ou tu rencontres un probl\xe8me?"),(0,n.kt)("br",{parentName:"p"}),"\n","Tu peux revenir \xe0 la branche par d\xe9faut en s\xe9lectionnant ",(0,n.kt)("inlineCode",{parentName:"p"},"None")," ",(0,n.kt)("strong",{parentName:"p"},"dans la liste des B\xeatas \xe0 l'\xe9tape 4 du ",(0,n.kt)("a",{parentName:"strong",href:"#changer-de-branche"},"tutoriel ci-dessus")),".")),(0,n.kt)("h2",{id:"ajustements-avanc\xe9s"},"Ajustements avanc\xe9s"),(0,n.kt)("admonition",{title:"Avertissement ",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Les astuces ci-dessous ",(0,n.kt)("strong",{parentName:"p"},"ne marchent pas")," ou tu n'obtiendras pas n\xe9cessairement ",(0,n.kt)("strong",{parentName:"p"},"les m\xeames r\xe9sultats"),"  vu que \xe7a d\xe9pend de ",(0,n.kt)("strong",{parentName:"p"},"ta configuration"),".",(0,n.kt)("br",{parentName:"p"}),"\n","Garde en t\xeate que ",(0,n.kt)("strong",{parentName:"p"},"tu dois suivre les instructions correctement")," pour ne pas casser ton jeu.")),(0,n.kt)("h3",{id:"modifier-les-propri\xe9t\xe9s-du-jeu"},"Modifier les propri\xe9t\xe9s du jeu"),(0,n.kt)("admonition",{title:"Pr\xe9cision du chemin",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Les emplacements donn\xe9s peuvent ",(0,n.kt)("strong",{parentName:"p"},"varier suivant l'endroit o\xf9 tu as install\xe9 Steam et Garry's mod"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Trouve ",(0,n.kt)("inlineCode",{parentName:"li"},"hl2.exe")," et ouvre les ",(0,n.kt)("strong",{parentName:"li"},"Propri\xe9t\xe9s")," ",(0,n.kt)("em",{parentName:"li"},"(clique droit)"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Trouvable normalement dans ",(0,n.kt)("inlineCode",{parentName:"em"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\GarrysMod\\"))))),(0,n.kt)("li",{parentName:"ul"},"Dans l'onglet ",(0,n.kt)("strong",{parentName:"li"},"Compatibilit\xe9"),", coche l'option ",(0,n.kt)("inlineCode",{parentName:"li"},"D\xe9sactiver les optimisations du mode plein \xe9cran")),(0,n.kt)("li",{parentName:"ul"},"Clique sur ",(0,n.kt)("strong",{parentName:"li"},"Modifier les param\xe8tres PPP \xe9lev\xe9s")," et active le ",(0,n.kt)("inlineCode",{parentName:"li"},"Remplacement du comportement de mise \xe0 l'\xe9chelle")," par ",(0,n.kt)("strong",{parentName:"li"},"Application")),(0,n.kt)("li",{parentName:"ul"},"Cherche ",(0,n.kt)("inlineCode",{parentName:"li"},"gmod.exe")," et ",(0,n.kt)("strong",{parentName:"li"},"r\xe9p\xe8te les \xe9tapes pr\xe9c\xe9dentes"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Trouvable normalement dans ",(0,n.kt)("inlineCode",{parentName:"em"},"C:\\Program Files (x86)\\Steam\\steamapps\\common\\GarrysMod\\bin\\")))))),(0,n.kt)("h3",{id:"param\xe8tres-vid\xe9o"},"Param\xe8tres vid\xe9o"),(0,n.kt)("admonition",{title:"L\xe9gende",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Recommendations pour un ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"PC moyen / haut de gamme")," ",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},"Recommendations pour un ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"PC faible")))),(0,n.kt)("p",null,"Tu devras cliquer sur le bouton ",(0,n.kt)("strong",{parentName:"p"},"Avanc\xe9es")," dans l'onglet ",(0,n.kt)("strong",{parentName:"p"},"Vid\xe9o de tes param\xe8tres Garry's mod"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"D\xe9tail des mod\xe8les")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"\xc9lev\xe9")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"Moyen-Bas"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Note que certains addons ne marcheront pas si tu n'utilises pas \xc9lev\xe9")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"D\xe9tail des textures")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"\xc9lev\xe9")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"Moyen-Bas"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Tr\xe8s \xe9lev\xe9 n'est pas utile et bouffe tes FPS sur des gros serveurs comme les RP")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"D\xe9tail des shaders")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"\xc9lev\xe9")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"Bas")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"D\xe9tail de l'eau")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"Tout r\xe9fl\xe9chir")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"R\xe9fl\xe9chir le monde-Simple R\xe9flections")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"D\xe9tail des ombres")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"\xc9lev\xe9")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"Bas"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"L'option bas d\xe9sactive les ombres")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Correction des couleurs")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"Activ\xe9e")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"D\xe9sactiv\xe9e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Anti-Aliasing")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"4x MSAA")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"2x-None"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"8x MSAA n'est pas utile et beaucoup trop")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mode de filtrage")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"16x")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"Inf\xe9rieur \xe0 16x")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Attendre la synchro verticale")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"Off")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"Off")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flou de mouvement")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"Off")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"Off"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Inutile et peu rendre certaines maps illisibles")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Champ de vision")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"90-100")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"90-100")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rendu Multi-coeur")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"On")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"On"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Cela ne l'activera pas r\xe9ellement, suis ",(0,n.kt)("a",{parentName:"em",href:"#options-de-lancement"},"ce tutoriel")," pour forcer l'activation")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High Dynamic Range")," - ",(0,n.kt)(m,{color:"#32a852",mdxType:"Highlight"},"Full")," / ",(0,n.kt)(m,{color:"#e6b749",mdxType:"Highlight"},"Full"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Requis par certaines maps, d\xe9sactive si ton PC souffre trop"))))),(0,n.kt)("h3",{id:"options-de-lancement"},"Options de lancement"),(0,n.kt)("admonition",{title:"Avertissement",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},'C\'est la partie la plus "technique" de ce tutoriel'),", mais si tu suis correctement, \xe7a devrait bien se passer. :)",(0,n.kt)("br",{parentName:"p"}),"\n","Comme mentionn\xe9 plus haut, certains param\xe8tres ne sont pas appliqu\xe9s lors du lancement du jeu donc nous allons ",(0,n.kt)("strong",{parentName:"p"},"le forcer \xe0 les lire et \xe0 les ex\xe9cuter"),".")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Localise les ",(0,n.kt)("strong",{parentName:"li"},"fichiers locaux de ton Garry's mod"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Dans ta biblioth\xe8que Steam, va dans ",(0,n.kt)("inlineCode",{parentName:"em"},"G\xe9rer / Propri\xe9t\xe9s / Fichiers locaux / Parcourir les fichiers locaux"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Rend toi")," dans le dossier ",(0,n.kt)("inlineCode",{parentName:"li"},"garrysmod/cfg")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Ouvre")," le fichier ",(0,n.kt)("inlineCode",{parentName:"li"},"autoexec.cfg")," avec un \xe9diteur de texte ",(0,n.kt)("em",{parentName:"li"},"(Notepad, Notepad++, Sublime text, etc..)"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Si le fichier n'existe pas, cr\xe9\xe9 le")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Copie le bloc de code suivant")," et ",(0,n.kt)("strong",{parentName:"li"},"colle le")," dans le fichier ",(0,n.kt)("inlineCode",{parentName:"li"},"autoexec.cfg"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'// Param\xe8tres du rendu multi-coeur\n// highlight-start\ngmod_mcore_test 1\nmat_queue_mode 2\ncl_threaded_bone_setup 1\ncl_threaded_client_leaf_system 1\nr_threaded_client_shadow_manager 1\nr_threaded_particles 1\nr_threaded_renderables 1\nr_queued_ropes 1\nstudio_queue_mode 1\nmat_specular 1\n// highlight-end\n\n// Change le "999" par le taux de rafraichissement de ton \xe9cran\n// highlight-next-line\nfps_max 999 \n// Supprime les addons auxquels tu n\'es plus abonn\xe9\n// highlight-next-line\nmenu_cleanupgmas \n// Sauvegarder les param\xe8tres dans config.cfg\n// highlight-next-line\nhost_writeconfig \n')),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Sauvegarde les changements")," et retourne dans le menu ",(0,n.kt)("strong",{parentName:"li"},"Propri\xe9t\xe9s")," de Steam"),(0,n.kt)("li",{parentName:"ol"},"Dans le champ ",(0,n.kt)("strong",{parentName:"li"},"D\xe9finir les options de lancement"),", \xe9cris la commande suivante",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"+exec autoexec.cfg"))))),(0,n.kt)("h4",{id:"cest-termin\xe9-ton-jeu-devrait-\xeatre-beaucoup-plus-fluide-maintenant"},"C'est termin\xe9, ton jeu devrait \xeatre beaucoup plus fluide maintenant!"),(0,n.kt)("admonition",{title:"Cr\xe9dits",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Des parties de cette page ont \xe9t\xe9 r\xe9alis\xe9es gr\xe2ce ",(0,n.kt)("a",{parentName:"strong",href:"https://steamcommunity.com/sharedfiles/filedetails/?id=1911349076"},"\xe0 ce guide Steam")),", regarde le!")))}c.isMDXComponent=!0}}]);