
//dans cette methode , l'année ne change rien vu que depuis 2008 , le taux est rester inchangé

class Mathematique {


    static calculTPS(montantSansTaxe) {
        let taxe = 0;
        const pourcentage = 5;

        taxe = montantSansTaxe * pourcentage / 100;
        return taxe;
    }

    static calculTVQ(montantSansTaxe, annee) {
        console.log("année: " + annee);
        let taxe = 0;
        let pourcentage = 0;
        switch (parseInt(annee)) {
            case 2011:
                pourcentage = 8.5;
                break;
            case 2012:
                pourcentage = 9.5;
                break;
            case 2013:
            case 2014:
            case 2015:
            case 2016:
            case 2017:
            case 2018:
            case 2020:
            case 2021:
            case 2022:
            case 2023:
                pourcentage = 9.975;
                break;
        }
        console.log("taxe: " + pourcentage);
        taxe = montantSansTaxe * pourcentage / 100;
        console.log("total: " + taxe);
        return taxe;

    }

    static totalAvecTaxes(montantSansTaxe, tps, tvq) {
        let total = parseFloat(montantSansTaxe) + parseFloat(tps) + parseFloat(tvq);

        return total;
    }


}

export default Mathematique;
