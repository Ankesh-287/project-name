import  { Controller, Get, Post, Body, Query, Param, Put, Delete} from '@nestjs/common'
import { CreateCatDto, UpdateCatDto, ListAllEntities} from './dto'

@Controller('cats')
export class CatsContoller{
    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return 'Action'
    }
    
    @Get() 
    findAll(@Query() query: ListAllEntities ) {
        return `this action #${query.limit} items`
    }

    @Get(':id') 
    findOne(@Param('id') id: string ) {
        return `this action #${id} items`
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return ` this update${id}`
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `delete ${id}`
    }
       
}