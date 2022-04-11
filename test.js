if (bUp) {
    if (b < 255 - bDelta) {
        b + bDelta;
    } else {
        b - bDelta;
        bUp = false
    }
} else {
    if (b > 0 + bDelta) {
        b - bDelta;
    } else {
        b + bDelta;
        bUp = true;
    }
}
