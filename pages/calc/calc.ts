import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-calc',
    templateUrl: 'calc.html'
})

export class CalcPage {

    resultnormal = '';
    resultbin = '-';
    resultoct = '-';
    resulthex = '-';
    resultand = '-';
    resultdec = '-';
    resultor = '-';

    constructor(public navCtrl: NavController) { }

    convertBin(resultnormal, base) {
        this.resultbin = parseInt(resultnormal, 10).toString(base);
        if (this.resultbin < '0') {
            this.resultbin = '0'
        }
    }

    convertDec(resultnormal, base) {
        this.resultdec = parseInt(resultnormal, 2).toString(base);
        if (this.resultdec < '0') {
            this.resultdec = '0'
        }
        else(this.resultdec = this.resultnormal)
    }

    convertOct(resultnormal, base) {
        this.resultoct = parseInt(resultnormal, 10).toString(base);
        if (this.resultoct < '0') {
            this.resultoct = '0'
        }
    }

    convertHex(resultnormal, base) {
        this.resulthex = parseInt(resultnormal, 10).toString(base);
        if (this.resulthex < '0') {
            this.resulthex = '0'
            this.resulthex = 'a'
        }
    }
    
    convertOr(resultbin, base) {
        this.resultor = parseInt(resultbin, 10).toString(base);
        if (this.resultor < '0') {
            this.resultor = '0'
        }
    }

    btnClicked(btn){        
        if (btn == 'C') {
            this.resultnormal = '';
            this.resultbin = '0';
            this.resultdec = '0';
            this.resultoct = '0';
            this.resulthex = '0';
            this.resultor = '0';
        }
        
        else if (btn == '√') {
          this.resultnormal = Math.sqrt(Number(this.resultnormal)).toString();

            if (this.resultnormal == 'NaN') {
                this.resultnormal = '0';
                this.resultbin = '0';
                this.resultdec = '0';
                this.resultoct = '0';
                this.resulthex = '0';
                this.resultor = '0';
            }
            else if (btn == 0 && (this.resultnormal == "" || this.resultnormal == "0") && this.resultnormal.search(".") == -1) {
                console.log('caiu no else if');
            }
            else {
                this.resultnormal = '√';
                this.resultbin = '0';
                this.resultdec = '0';
                this.resultoct = '0';
                this.resulthex = '0';
                this.resultor = '0';
            }
        }
        else if (btn == '=') {
            if (this.resultnormal[0] == "√"){
                let valor_raiz = (this.resultnormal.substring(1, (this.resultnormal.length)));
                this.resultnormal = Math.sqrt(Number(valor_raiz)).toString();
                this.convertBin(this.resultnormal, 2);
                this.convertDec(this.resultnormal, 10);
                this.convertOct(this.resultnormal, 8);
                this.convertHex(this.resultnormal, 16);
                this.convertOr(this.resultnormal, 2);
                }
            else{
                this.resultnormal = eval(this.resultnormal);
                this.convertBin(this.resultnormal, 2);
                this.convertOct(this.resultnormal, 8);
                this.convertDec(this.resultnormal, 10);
                this.convertHex(this.resultnormal, 16);
                this.convertOr(this.resultnormal, 2);
            }
        }
        else if (btn == '%') {
            this.resultnormal = (parseFloat(this.resultnormal) / 100).toString();
            this.convertBin(this.resultnormal, 2);
            this.convertOct(this.resultnormal, 8);
            this.convertDec(this.resultnormal, 10);
            this.convertHex(this.resultnormal, 16);
            this.convertOr(this.resultbin, 10);
        }
        else if (btn == 'bs') {
            this.resultnormal = this.resultnormal.toString();
            this.resultnormal = this.resultnormal.substring(0, (this.resultnormal.length - 1));

            if (this.resultnormal == '') {
                this.resultbin = '0';
                this.resultoct = '0';
                this.resultdec = '0';
                this.resulthex = '0';
                this.resultor ='0';
            }
            else {
                this.convertBin(this.resultnormal, 2);
                this.convertOct(this.resultnormal, 8);
                this.convertDec(this.resultnormal, 10);
                this.convertHex(this.resultnormal, 16);
                this.convertOr(this.resultbin, 10);
                }
            }

        else {
            //aceita o 0 antes do .
            if (btn == "." && this.resultnormal == "") {
                this.resultnormal += "0" + btn;
            }
            //nao recebe 0 antes de um inteiro
            else if (btn == 0 && (this.resultnormal == "" || this.resultnormal == "0") && this.resultnormal.search(".") == -1) {
                //faz nada
            }
            //incrementa numeros e operacao
            else {
                if (this.resultnormal[0] == "√") {
                    this.resultnormal += btn;
                }
                else{
                    this.resultnormal += btn;
                    this.convertBin(this.resultnormal, 2);
                    this.convertOct(this.resultnormal, 8);
                    this.convertDec(this.resultnormal, 10);
                    this.convertHex(this.resultnormal, 16);
                    this.convertOr(this.resultbin, 10);
                }
            }
        }
    }
}
