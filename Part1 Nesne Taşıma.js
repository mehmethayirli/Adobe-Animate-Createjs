var nesne = this.cember; // this.nesneAdi

        nesne.addEventListener("mousedown", tiklama);
        nesne.addEventListener("pressup", birakma); //pressup = mouseup

        //stage.addEventListener("x",y); 2 parametre alır. Eylem bildirir.

        function tiklama() {
            stage.addEventListener("stagemousemove", tasima)
        }

        function birakma() {
            stage.removeEventListener("stagemousemove", tasima)// remove ile eylemi iptal et
        }

        function tasima() {
            nesne.x = stage.mouseX; // x konumu
            nesne.y = stage.mouseY; // y konumu
            stage.tickOnUpdate = false;
            stage.update(); // sahneyi tazeler, gunceller
            stage.tickOnUpdate = true;
        } 