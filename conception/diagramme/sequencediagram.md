sequenceDiagram
  actor Passager as Passager
  participant Vol as Vol
  participant Réservation as Réservation
  participant Système_Paiement as Système_Paiement
  participant P1 as New Participant

  Passager ->> Vol: sélectionner_vol()
  Vol -->> Passager: OK
  Vol ->> Vol: vérifier_capacité()
  alt Si la capacité demandée est disponible
    Vol ->> Réservation: commencer_réservation()
    Réservation ->> Système_Paiement: calculer_paiement()
    Système_Paiement -->> Réservation: OK
    Réservation -->> Vol: OK
    Système_Paiement ->> Passager: payer_réservation()
    Système_Paiement ->> Système_Paiement: vérification_paiement_effectué()
    alt Si le paiement est effectué
      Système_Paiement -->> Passager: réservation_créée
    else Si le paiement n'est pas effectué
      Système_Paiement -->> Passager: erreur()
    end
  else Si la capacité est non disponible
    Vol -->> Passager: erreur()
  end