"use strict";
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 1] = "AISLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["NONE"] = 4] = "NONE";
})(SeatChoice || (SeatChoice = {}));
let seat = SeatChoice.AISLE;
const seat2 = SeatChoice.WINDOW;
//# sourceMappingURL=enum.js.map