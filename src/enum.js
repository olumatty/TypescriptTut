var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 1] = "AISLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["NONE"] = 4] = "NONE";
})(SeatChoice || (SeatChoice = {}));
var seat = SeatChoice.AISLE;
var seat2 = SeatChoice.WINDOW;
