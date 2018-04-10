// CH, Schweiz, HU Ungarn, AU Australien [social + off] KE, Kenya, US, BE, BD, GE (Georgien)
// GR, JP, YU

export const grupper = [
    {   /** virker */
        gruppe: 'N',
        lande: ['NO', 'SE', 'IS', 'FI']
    },
        /** afklaring Serbien, Kina, tjekkiet, Kuwait - privat, her er der ingen entydig logisk forbindelse til beskatningstype */
    {
        gruppe: 'B',
        lande: []
    },
    /** mangler Fæøerne, Luxemborg */
    {
        gruppe: 'C',
        lande: []
    },
    /** fungerer [off, privat]  */
    {
        gruppe: 'D',
        lande: ['IT', 'VN', 'CY', 'EE', 'PH', 'IE', 'HR', 'LV', 'LT', 'MT', 'MA', 'MX', 'NZ', 'PL', 'SG', 'SI',
         'GB', 'ZA', 'TW', 'UG', 'UA', 'AT']
    },
    /** fungerer Montenegro Holland [off] */
    {
        gruppe: 'E',
        lande: ['ME', 'NL', 'RO', 'SK', 'LK', 'TZ', 'TH', 'TN', 'VE']
    },
    /** Tyskland OK, USA */
    {
        gruppe: 'singles',
        lande: ['DE','BE','US','JP']
    }
];




