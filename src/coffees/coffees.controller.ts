import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post, 
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(
        private readonly coffeesService: CoffeesService
    ){}

    @Get()
    index() {
        return this.coffeesService.index();
    }

    @Get(':id')
    show(@Param('id') id: string) {
        return this.coffeesService.show(id);
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.coffeesService.delete(id);
    }
}