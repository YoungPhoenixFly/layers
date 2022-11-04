export interface Mapper<IEntity, IPersistence> {
  toDomain(raw: IPersistence): IEntity;
  toPersistence(domain: IEntity): IPersistence;
}
