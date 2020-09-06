export interface IEntity {
    attribute: string;
}

export class Entity implements IEntity {
    attribute: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    static getInternalId(item: IEntity): string {
        return '';
    }

    get $attribute() { return this.attribute; }

    set $attribute(value: string) { this.attribute = value; }
}
