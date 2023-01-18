import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

interface ICreateRepositoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository implements ICategoriesRepository {
  private readonly repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateRepositoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
