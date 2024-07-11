export default interface UsersStats {
    total: number;
    langs: UsersStatsByLang[];
}

interface UsersStatsByLang {
    tot: number;
    lang: string;
}