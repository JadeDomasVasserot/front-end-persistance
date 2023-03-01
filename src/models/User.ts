import Role from "@/models/Role";

export default class User {
    private id: number;
    private nom: string;
    private prenom: string;
    private email: string;
    private password: string;
    private idRole: Role;


    constructor(id: number, nom: string, prenom: string, email: string, password: string, idrole: Role) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.idRole = idrole;
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

    getPrenom(): string {
        return this.prenom;
    }

    setPrenom(value: string) {
        this.prenom = value;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(value: string) {
        this.email = value;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(value: string) {
        this.password = value;
    }

    getIdRole(): Role {
        return this.idRole;
    }

    setIdRole(value: Role) {
        this.idRole = value;
    }
}
