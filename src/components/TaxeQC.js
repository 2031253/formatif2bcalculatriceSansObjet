import React, { Component } from 'react';
import Mathematique from '../util/Mathematique'
import MontantAvecTaxes from '../util/MontantAvecTaxes'
//import MontantAvecTaxes from './util/MontantAvecTaxes'
/*
Ici on gère le calcul de taxe
*/
class TaxeQC extends Component {

   

    state = {
        annee: 2011,
        tps: 0,
        tvq: 0,
        montantSansTaxes: 0,
        montantAvecTaxes: 0
    }


    //va modifier les valeurs de tps , tvq et total et les autres methodes vont s'occuper d'afficher les nouvelles valeurs

    Modifierannee = (event) => {

        const leTps = Mathematique.calculTPS(this.state.montantSansTaxes)
        const leTvq = Mathematique.calculTVQ(this.state.montantSansTaxes, parseInt(event.target.value))
        const leTotal = Mathematique.totalAvecTaxes(this.state.montantSansTaxes, leTps, leTvq);
        { console.log("le Total: " + leTotal) }
        { console.log(leTps + " + " + leTvq + " + " + this.state.montantSansTaxes + " = " + leTotal) }
        this.setState((
            {
                annee: parseInt(event.target.value),
                tps: leTps,
                tvq: leTvq,
                montantAvecTaxes: leTotal
            }
        )
        )

    }

    ModifierMontantSansTaxe = (event) => {

        { console.log("les valeurs ont changé") }
        const leTps = Mathematique.calculTPS(event.target.value)
        const leTvq = Mathematique.calculTVQ(event.target.value, this.state.annee)
        const leTotal = Mathematique.totalAvecTaxes(parseFloat(event.target.value), leTps, leTvq);

        { console.log(leTps + " + " + leTvq + " + " + event.target.value + " = " + leTotal) }
        { console.log("le Total: " + leTotal) }
        this.setState(() => (
            {
                montantSansTaxes: event.target.value,
                tps: leTps,
                tvq: leTvq,
                montantAvecTaxes: leTotal
            }
        )
        )

    }

    render() {

        const annees = [];
        for (let annee = 2011; annee <= 2023; annee++) {
            annees.push(annee);
        }
        return (
            <div>
                <h3>Choisissez l'année du calcul</h3>

                <select id="annee" onChange={this.Modifierannee}>
                    {annees.map((annee) => (
                        <option key={annee} value={annee} >
                            {annee}
                        </option>
                    ))}
                </select>

                <h3>Entrez le montant avant taxe : </h3>
                <input type='number' id='nombreEntre' onChange={this.ModifierMontantSansTaxe}></input>
                <h2>TPS:</h2>
                <input type='number' id='tps' readOnly value={this.state.tps} />
                <h2>TVQ:</h2>
                <input type='number' id='tvq' readOnly value={this.state.tvq} />
                <h2>Montant Total:</h2>
                <input type='number' id='total' readOnly value={this.state.montantAvecTaxes} />
            </div>
        );
    }
}

export default TaxeQC;
