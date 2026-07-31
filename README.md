# Race Setup v1.10

Correzione OCR Prisma:

- eliminato il sistema di ripiego che inseriva `1` in più campi;
- ogni valore viene accettato solo se trovato vicino alla relativa etichetta;
- applicati intervalli plausibili diversi per temperatura, pressione, RH,
  densità aria e altitudine;
- i valori dubbi rimangono vuoti anziché essere compilati in modo errato;
- aggiunto il testo grezzo letto dall'OCR per diagnosticare le foto difficili;
- tutti i campi restano modificabili.
