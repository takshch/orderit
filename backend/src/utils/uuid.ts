import ShortUniqueId from 'short-unique-id';

const UUID_LENGTH = 10;

const UUID = new ShortUniqueId({ length: UUID_LENGTH });

export default UUID;

export { UUID_LENGTH };
