/**
 *  Création d'un objet Véhicule
 *  @constructor
 *  @param couleur
 *  @param nbRoues
 *  @param marque
 */

class Vehicule {

    constructor(couleur, nbRoues, marque) {
        this.couleur = couleur;
        this.nbRoues = nbRoues;
        this.marque = marque;
    }


    /**
     * @method demarer
     */

    demarrer() {
        console.log("Le véhicule " + this.couleur + " de marque " + this.marque + " à " + this.nbRoues + " roues démare !! vroum vroum la vitesse!!");
    }


    /**
     * @method arreter
     */

    arreter() {
        console.log("Le véhicule " + this.couleur + " de marque " + this.marque + " à " + this.nbRoues + " roues s'arette de poisson...");
    }
}


/**
 *  Création d'un objet Vélo
 *  @constructor
 *  @param couleur
 *  @param nbRoues
 *  @param marque
 *  @param rayonRoues
 *  @param typePeinture
 */

class Velo extends Vehicule {

    constructor(couleur, nbRoues, marque, rayonRoues, typePeinture) {
        super(couleur, nbRoues, marque);
        this.rayonRoues = rayonRoues;
        this.typePeinture = typePeinture;
    }


    /**
     * @method monter
     */

    monter() {
        console.log("J'enfourche mon vélo " + this.couleur + " tel le prince de bel air.");
    }
}


/**
 *  Création d'un objet Voiture
 *  @constructor
 *  @param couleur
 *  @param nbRoues
 *  @param marque
 *  @param assurance
 *  @param proprietaire
 */

class Voiture extends Vehicule {

    constructor(couleur, nbRoues, marque, assurance, proprietaire) {
        super(couleur, nbRoues, marque);
        this.assurance = assurance;
        this.proprietaire = proprietaire;
    }


    /**
     * @method carwash
     */

    carwash() {
        console.log("La voiture " + this.marque + " de " + this.proprietaire + " est lavée plus blanc que blanc !!");
    }

}


/*Appel des objets et methodes pour test*/

const bicloune = new Velo("rouge", 2, "MBK", 24, "chromé");

bicloune.demarrer();
bicloune.monter();

const carette = new Voiture("verte", 4, "renault", "matmut", "Sylvain-Pierre Duriff");

carette.arreter();
carette.carwash();