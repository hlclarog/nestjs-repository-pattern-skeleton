export class BaseController {
  protected constructor(private readonly _service) {}

  async append(createDto) {
    const result = await this._service.create(createDto);
    return { data: result };
  }

  async all() {
    const result = await this._service.findAll();
    return { data: result };
  }

  async find(id: string) {
    const result = await this._service.findOne(+id);
    return { data: result };
  }

  async edit(id: string, updateDto) {
    const result = await this._service.update(+id, updateDto);
    return { data: result };
  }

  async delete(id: string) {
    const result = await this._service.remove(+id);
    return { data: result };
  }
}
