export default class Article {
    private id: number;
    private nom: string;
    private description: string;
    private prix: number;


    constructor(id: number, nom: string, description: string, prix: number) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
    }


    getId(): number {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }
    getNom(): string {
        return this.nom;
    }

    setNom(value: string) {
        this.nom = value;
    }
    getDescription(): string {
        return this.description;
    }

    setDescription(value: string) {
        this.description = value;
    }

    getPrix(): number {
        return this.prix;
    }

    setPrix(value: number) {
        this.prix = value;
    }

}
