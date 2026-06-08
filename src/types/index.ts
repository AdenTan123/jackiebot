export interface Command {
    name: string;
    description: string;
    execute: (userMention: string) => Promise<string>;
}

export interface UserMention {
    id: string;
    username: string;
    discriminator: string;
}