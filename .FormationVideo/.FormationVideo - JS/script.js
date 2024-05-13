/*
    Memo
    ----------------------------------------------------------------------------------------------------------------------- 
    
    > document.write() - affiche sur le navigateur
    > console.log() - affiche dans la console du navigateur
    > alert() / confirm() - affiche un popup
    > prompt() - retourne la valeur saisie de l'utilisateur / une info

    > var / let - valeur variable
    > const - valeur constante (non modifiable) pour nombres, chaînes de caractères, booléen,...
              type de données constant, mais contenu modifiable pour tableaux, objets,...                      

    > parseInt() - retourne un nombre entier (Integer) 
    > parseFloat() - retourne un nombre à virgule/flottant/décimaux 

    > typeOf - retourne le type variable strings/numbers/null - undefined/booleans/arrays/objects
    
    -----------------------------------------------------------------------------------------------------------------------

    > Opérateurs
        =, +=, -=, *=, /=, %= (N = N + 1; > N += 1 // N = N - 1; > N -= 1)
        ++, -- (++N , N++ / --N , N--) 
        +, -, *, /, %
    
    > Opérateurs Comparaison
        < plus petit que / inférieur, >  plus grand que / supérieur, <= inférieur ou égal à, >= supérieur ou égal à
        ==, === (vérife l'égal et l'egalité du type), != (différent), !== (vérifie si c'est l'un ou l'autre)

        
    > Opérateurs Logique
        && => ET (AND)
        || => OU  (OR)
        | => NON (NOT)

    -----------------------------------------------------------------------------------------------------------------------
    
    > Conditions
        if(...) {...} else {...} // if(...) {...} else if(...) {...} else {...}
        switch(...) {
            case 0:
                ...;
            break; on sort du switch

            default:
                ...;
            break; on sort du switch
            continue; on fait un saut sur une nouvelle itération  
        }
        ternaire -> <condition> ? <cas_vrai> : <cas_faux>
            ex : let number = 15;
                 console.log((number > 10) ? "number > 10" : "number <= 10");
    
    ----------------------------------------------------------------------------------------------------------------------
    
    > Boucles
        while (...) {...} - tant que les instructions sont validés on répète ttes les instructions
            ex : while(i < 10) {
                    console.log("AAA");
                    i++;
                }
        
        do {...} while(...);
            ex : do {
                    console.log("AAA");
                    i++;
                }
                while(i < 10);
        
        for (initialisation ; expression à vérifier ; l'opération a effectuer) {...}
            ex : for(let i = 0 ; i < 5 ; i++) {
                    console.log("AAA");                    
                }
        for...in
        for...of
        
        break; intérrompt la boucle
        continue; on fait un saut sur une nouvelle itération

    ----------------------------------------------------------------------------------------------------------------------
    
    > Fonctions simples
        function nomFonction(paramètres1, paramètres2) { ... };
        nomFonction (param1, param2);

                ex : function sum(nb1, nb2) {
                        return nb1 + nb2 // retourne une valeur
                     }
                     let result = sum(4, 3);  
                     console.log(result);
        
    > Fonctions imbriquée
        function nomFonction() { ... function nomFonction() { ... } };
        nomFonction (param1, param2);

                ex : function someFunction() {
                        let data = 16;
                        
                        function anotherFunction() {
                            console.log(data);
                        }

                        anotherFunction();
                     }
                     someFunction();
                             
    > Expression de Fonctions
        let maVariable = function nomFonction() { ... };
        maVariable();

    > Expression de Fonctions anonyme
        let maVariable = function(x, y) {return x + y};
        console.log(maVariable(45, 6));
    
    > Fonction flêchée
        let maVariable (x, y) => {return x + y};  (<arguments>) => {<instructions>} 
        console.log(maVariable(45, 6));
    
    ----------------------------------------------------------------------------------------------------------------------
    
    > POO

        ex : class MusicPlayer {
                constructor(format) {
                    this.format = format; > this.format = attribut
                }
                
                play() {
                    console.log("Lecture en cours...");
                }

                getFormat() { > paire de méthode pour changer les attributs
                    return this.format;
                }

                setFormat(new_format) {
                    this.format = new_format;
                }

             }
             let player = new MusicPlayer("MP3");
             player.play();
             console.log(player.getFormat());
             player.setFormat("AAC");
             console.log(player.getFormat());
    
    ----------------------------------------------------------------------------------------------------------------------
    
    > Chaine de caractères
        > charAt() > retourne le premier caractère 
            ex: let s = "Arbre"
                console.log(s.charAt(0)); > retourne A
                console.log(s[0]); > retourne A via l'indice du tableau

        > .length > retourne le nombre de caractère
            ex: let s = "Arbre" > pour avoir le dernier caractère il faut toujours faire <taille de la chaîne - 1>
                console.log(s.charAt(s.length - 1)); > retourne e 
                console.log(s[s.length - 1]); > retourne e via l'indice du tableau  - 1
                
        > Littéral
            ex: let s = "Steve";
                console.log("Bonjour" + s + " ,comment vas-tu ?"); => console.log(`Bonjour ${s} ,comment vas-tu ?`); 
    
    > Methode
        chartAt(), []
        concat() > console.log(s.concat("...")); => concatène une chaine de caractère
        startsWith(), endsWith() > console.log(s.startsWith("B")); => vérifie que cela commence par un B => renvoie true/false
        padStart(), padEnd() > console.log(s.padEnd(10, ".")); => complète une chaine de caractère
        trim(), trimStart(), trimEnd() > console.log(s.trim()); => efface les espaces d'une chaine de caractère
        
        repeat() > console.log(s.includes(3)); => repète la chaine de caractères
        replace(), replaceAll() > console.log(s.replace("e", "a"));
        substring(), slice() > console.log(s.substring(1,5)); // console.log(s.slice(1,5)); => recupère l'indice de début et l'indice de fin // extrait une chaine de caractère
                
        indexOf() > console.log(s.indexOf("t")); => retourne l'indice de la première occurance => 2 si on trouve rien cela renvoie -1
        lastIndexOf() => retourne l'indice de la dernière occurance => 4 si on trouve rien cela renvoie -1
        includes() > console.log(s.includes(",")); => retoune un boolean true/false
        
        toLowerCase(), toUpperCase() > console.log(s.toLowerCase()); => transforme la casse 

        split(); éclate une chaine en plusieurs conteneurs = tableau
    
    ----------------------------------------------------------------------------------------------------------------------
    
    > Nombres

        Math.round() > Arrondit automatiquement le nombre à l'entier le plus proche. 
            Math.round(8.15) ; // Retourne 8 
            Math.round(8.76) ; // Retourne 9
        
        Math.floor() > Arrondit à l'entier inférieur. 
            Math.floor(8.9) ; // Renvoie 8
        
        Math.ceil() > L'arrondit à l'entier supérieur. 
            Math.ceil(3.1) ; // Renvoie 4
        
        toFixed() 
            let myNumber = 5.379453; 
            myNumber.toFixed(2); // Renvoie 5.37

        parseFloat() 
            let myString = "4.786" ;
            parseFloat(myString) ; // Retourne 4.786 (le nombre, pas la chaîne)
        
        parseInt() 
            parseInt(myString) ; // Retourne 4
        
        toString()
            let num = 54 ;
            num.toString() ; // Retourne "54" (la chaîne, pas le nombre)

        Math.random() > Générer un nombre aléatoire
    
    ----------------------------------------------------------------------------------------------------------------------
        
    > Tableau => Array

        let someArray = ["...","...","..."];

        let array2D = [
            ["...", "...","..."],
            ["...", "...","..."]
        ];

        console.log(someArray[indice]);
        
        > Methode
            Length => affiche l'indice 
            Pop => récupère un élement // Push => ajoute un élément à la fin > someArray = s.push(' ... ');
            Shift => supprime un élément // unshift => ajoute un élément à la fin
            Concat => fusionne 2 tableaux > someArray.concat(anotherArray);
            Join => joint chaque élément du tableau > let someArray = s.join(' ... '); 
            Split => sépare chaque élément du tableau > let someArray = s.split(' ... '); 
            Slice => extrait les élément d'un tableau > someArray.slice(0, 2);
            Splice => remplace un élément d'un tableau > someArray.splice(0, 1, "Marie");
            Reverse => inverse toutes les valeurs > anotherArray.reverse();
            Sort => trie les éléments du tableau > anotherArray.sort();
            Includes => est ce que notre tableau inclus/contient/possède (true/false) 
            Filter => filtre les éléments du tableau  > anotherArray.filter(x => x > 0);
            Map => remplace tous les élements d'un tableau > someArray.map(value => "inconnu");         

        > Modification du tableau
            someArray[0] = "new_value";

        > Parcourir le tableau avec une boucle for
            for(let i = 0 ; i < someArray.length ; i++) {
                console.log(someArray[i]);
            }

            for(value of someArray) => parcours chaque valeur du tableau
                console.log(value);     

            for(index in someArray) => parcours chaque indice du tableau
                console.log(index);

            someArray.forEach(value => console.log(value));
            someArray.forEach(function(value, index) {
                console.log(index + " - " + value);
            });

        > ARRAY methods
            push() > ajouter à la fin // pop() > retirer de la fin
            shift() > retirer du début // unshift() > ajouter du début
            concat() > Concatène deux ou plusieurs tableaux
            includes() > renvoie un message vrai ou faux si le tableau contient un élément.
            indexOf() > Renvoie l'index d'un élément du tableau.  S'il n'est pas trouvé, il renvoie -1
            join() >  Crée une chaîne de caractères à partir d'un tableau. Si aucun argument n'est passé, ils sont séparés par une virgule ( , ). Sinon, vous pouvez passer par ce qui sera joint.
            split() > ATTENTION, il s'agit d'une méthode STRING. Elle divise une chaîne de caractères en un tableau en fonction des caractères insérés dans la méthode. C'est le contraire de join()
            reverse() > Inverse un tableau. Le tableau original est modifié
            slice() > Copie une partie d'un tableau. Renvoie un nouveau tableau. Cela n'a pas d'impact sur le tableau original.
                    Elle prend un argument d'index à partir du moment où vous voulez copier le tableau et un autre à partir du moment où vous voulez terminer. Si vous mettez 0, le tableau sera copié en entier.
            splice() > Supprime / remplace les éléments d'un tableau. Il modifie le tableau d'origine. Il renvoie les éléments supprimés. 
                    Il prend trois arguments : splice( où commencer, combien d'éléments supprimés, quoi insérer)
            sort() > Trie un tableau par le premier caractère (après l'avoir converti en chaîne). Modifie le tableau original

        > ARRAY methods with callbacks
            forEach() > Prend une fonction de rappel qui est appliquée à chaque élément du tableau.
                Le premier paramètre est l'élément individuel pour chaque instance de la boucle. Le second paramètre est l'index.
                La valeur renvoyée peut modifier le tableau original
                    nums = [1, 2, 3, 4, 5];
                    nums.forEach(function (n) {
                        console.log(n * 2);
                        });

            map() > Renvoie un nouveau tableau à partir de la fonction que vous passez pour chaque élément du tableau original.
                C'est comme un forEach qui renvoie un nouveau tableau et ne modifie pas le tableau d'origine.   
                    nums = [1, 2, 3, 4, 5, 6];
                    numsTimesTwo = nums.map(function (n) {
                    return n * 2;
                    });
                    numsTimesTwo === [2, 4, 6, 8, 10, 12];

            filter() > Renvoie un nouveau tableau contenant tous les éléments qui ont passé avec succès le test mis en œuvre par la fonction fournie.
                    arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
                    newArr = arr.filter((elem) => {
                    return elem % 2 === 1;
                    });
                    newArr === [9, 7, 5, 3, 1];

            find() > La méthode find() renvoie la valeur du premier élément d'un tableau qui a passé un test (fourni sous forme de fonction).
                    arr = [5, 3, 8, 1];
                    arr.find((elem) => {
                    return elem > 6;
                    }) === 8;

            some() > Prend une fonction de test et vérifie si au moins un élément du tableau passe le test. Renvoie une valeur booléenne.
            
            every() > Prend une fonction de test et vérifie si chaque élément du tableau passe le test. Renvoie une valeur booléenne.
            
            sort() > Nous avons vu sort() avec son paramètre par défaut et il trie un tableau en convertissant chaque élément en une chaîne de caractères et en le triant par la première lettre.
                Mais nous pouvons passer une fonction de rappel à sort qui peut être plus utile.
                Elle prend deux paramètres : a et b.
                si la comparaison entre a et b est inférieure à 0, a est trié avant b.
                Si la comparaison est égale à 0, a est laissé inchangé.
                Si la comparaison est supérieure à 0, b est trié avant a.
                Il modifie le tableau d'origine
                    arr = [5, 2, 9, 1, 4];
                    arr.sort((a, b) => {
                        return a - b;
                    });
                    arr === [1, 2, 4, 5, 9];
            
            reduce() > À partir d'un tableau de valeurs, il le "réduit" à UNE valeur. La façon dont il va le faire est définie dans la fonction callback.
                Elle prend deux paramètres :
                    reduce((accumulator, currentValue) => {}) 
                Elle va itérer à travers chaque élément du tableau en effectuant les actions établies par la fonction et en mettant à jour l'"accumulateur"
                Après la fonction, vous pouvez passer un "accumulateur" de départ.
                    arr = [10,20,30,40,50]
                    arr.reduce((accumulator, currentVal)={
                        return accumulator + currentVal
                    }, 1000) === 1150
                    
    ----------------------------------------------------------------------------------------------------------------------

    > Objects
        > Déclaration objets
            const myObject = {
                username: "trigorin88", //string
                downVotes: 19, //number
                upVotes: 214, //number
                netScore: 195, //number
                commentText: "Tastes like chicken. lol !", //string
                tags: ["#hillarious", "#funny", "#silly"], //array
                isApproved: true, //boolean
                imgSrc: {
                    thumbnail: "https://images.com/lnhj64225JG/200",
                    medium: "https://images.com/lnhj64225JG/600",
                    original: "https://images.com/lnhj64225JG/original",
                }, // object
            };
        
        > Accès à l'objet
            const user = {
                firstName: "Henrique",
                age: 35, 
                isMarried: true,
                hasChildren: true,
                children: [
                    {
                        firstName: "Eva",
                        age: 2,
                    },
                ],
            };

            // I can acess the firstName like so :
            user["firstName"]; // Returns "Henrique" - Bracket method
            user.firstName; // Returns "Henrique" - Dot notation method
            // I can also chain things. Let's say I want to select the first element of the children array and select the age property :
            user.children[0].age; // Returns 2

        > Tableau & objets
            const movies = [
            {
                title: "Braveheart",
                year: 1995,
                director: "Mel Gipson",
            },
            {
                title: "Goodfellas",
                year: 1990,
                director: "Martin Scorsese",
            },
            {
                title: "The Godfather",
                year: 1972,
                director: "Francis Ford Coppola",
            },
            {
                title: "Annie Hall",
                year: 1977,
                director: "Woody Allen",
            },
            ];

            You can access a particular movie with : movies[2].title; // Returns "The Godfather"

    ----------------------------------------------------------------------------------------------------------------------

    > Boucles

    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
    
    const seatingChart = [
        ["Colas", "Benoit", "Elodie"],
        ["Sola", "Irina", "Antonino", "Eli"],
        ["John", "Maryna", "Naike", "Fabrice"],
    ];

    // I can use nested loops to do that :

    for (let i = 0; i < seatingChart.length; i++) {
        const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
    
        for (let j = 0; j < row.length; j++) {
            console.log(row[j]);
        }
    }

*/

