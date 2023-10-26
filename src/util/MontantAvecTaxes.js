import Mathematique from './Mathematique';
import './Mathematique'
class MontantAvecTaxes {


        constructor(Annee, montantSansTaxe, tps, tvq) {
            this.Annee = Annee;
            this.montantSansTaxe = montantSansTaxe;
            this.tps =Mathematique. tps;
            this.tvq = tvq;
            this.montantAvecTaxe = this.calculeMontantAvecTaxe();
        }
    
        calculeMontantAvecTaxe() {
            return this.montantSansTaxe + this.tps + this.tvq;
        }
    
        getMontantSansTaxe() {
            return this.montantSansTaxe;
        }
    
        getTPS() {
            return this.tps;
        }
    
        getTVQ() {
            return this.tvq;
        }
    
        getMontantAvecTaxe() {
            return this.montantAvecTaxe;
        }
    
        getYear() {
            return this.Annee;
        }

    
}

export default MontantAvecTaxes;