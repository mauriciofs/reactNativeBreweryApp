export class NotFoundException extends Error {
    /**
     * Constructor class
     * @param {String} message - message to throw
     */
    constructor(message) {
        super(message);
        this.name = 'NotFound';
    }
}

export class UnauthorizedException extends Error {
    /**
     * Constructor class
     * @param {String} message - message to throw
     */
    constructor(message) {
        super(message);
        this.name = 'Unauthorized';
    }
}

export class ForbiddenException extends Error {
    /**
     * Constructor class
     * @param {String} message - message to throw
     */
    constructor(message) {
        super(message);
        this.name = 'Forbidden';
    }
}