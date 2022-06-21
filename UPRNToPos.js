class WGS84 {
    constructor() {
        this.latititude = 0.0;
        this.longitude = 0.0;
    }

    set(latitude, longitude) {
        this.latititude = latitude;
        this.longitude = longitude;
    }
}

class UPRNToPos {
    constructor(UPRN) {
        this.UPRN = UPRN;
    }

    toWGS84() {

        let wgs84 = new WGS84();

        const payload = { 
            "Choose_Address": {
                "name": "Choose_Address",
                "value": this.UPRN
            }
        };

        try
        {
            var vResponse = runLookupSync('580f22042a39a', payload);
            wgs84.set(parseFloat(vResponse.data[0].lat), parseFloat(vResponse.data[0].lng));
        }
        catch(err) {}

        return wgs84;
    }
}
