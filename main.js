var expression = document.getElementById('resultat');//Récupere l'id du resultat

/**
 * Affiche du bouton cliqué
 * @param {*} v valeur du bouton cliqué
 */
function valeur(v){
    if (v=="carre") {
        if (expression.value != "") {
            let valeur = eval(expression.value);
            expression.value = valeur+"*"+valeur;
        }
    }else{
        expression.value += v;
    }
}

/**
 * Calcul de l'expression saisie
 */
function calculer(){
    if(expression.value != ""){
        try { //vérifie s'il y'a des erreurs
            
            let res = eval(expression.value);//calcul l'expression

            expression.value = res;//Resultat de l'opération
        } catch (error) {
            // S'il y a erreur
            expression.value = "Syntaxe erreur"; // Affiche de l'erreur
        }
        
    }
}

/**
 * Supprime l'expression de calcul
 */
function cancel(){
    expression.value = ""; // Suppression de l'expression
}


/**
 * Supprime le dernier caractère de l'expression
 */
function del(){
    if(expression.value != ""){

    let valeur = new String(expression.value); // déclaration d'une chaine

    const newValeur =    valeur.substring(0, valeur.length - 1); // Suppression de la dernière caractère
    

    expression.value = newValeur; // Affichage de la nouvelle valeur
    }

}