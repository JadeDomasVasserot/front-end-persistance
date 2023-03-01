import Facture from "@/models/Facture";
import Article from "@/models/Article";

export default class Contient {
    private id: number;
    private idFacture: Facture;
    private idArticle: Article;
    private quantite: number;


    constructor(id: number, idFacture: Facture, idArticle: Article, quantite: number) {
        this.id = id;
        this.idFacture = idFacture;
        this.idArticle = idArticle;
        this.quantite = quantite;
    }


    getId(): number {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }
    getFacture(): Facture {
        return this.idFacture;
    }

    setFacture(value: Facture) {
        this.idFacture = value;
    }
    getArticle(): Article {
        return this.idArticle;
    }

    setArticle(value: Article) {
        this.idArticle = value;
    }

    getQuantite(): number {
        return this.quantite;
    }

    setQuantite(value: number) {
        this.quantite = value;
    }

}
