import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@ApiTags('Bookmarks')
@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}
  @Get()
  @ApiOperation({ summary: 'Get all bookmarks' })
  @ApiOkResponse({
    description: 'Bookmarks have been successfully fetched',
    type: CreateBookmarkDto,
  })
  @ApiBadRequestResponse({
    description: 'Credentials are not correct',
  })
  getBookmarks(@GetUser('id') userId: number) {
    return this.bookmarkService.getBookmarks(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new bookmark' })
  @ApiCreatedResponse({
    description: 'Bookmark has been successfully created',
    type: CreateBookmarkDto,
  })
  @ApiBadRequestResponse({
    description: 'Credentials are not correct',
  })
  createBookmark(
    @GetUser('id') userId: number,
    @Body() dto: CreateBookmarkDto,
  ) {
    return this.bookmarkService.createBookmark(userId, dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get bookmark by id' })
  @ApiCreatedResponse({
    description: 'Bookmark by id has been successfully fetched',
    type: CreateBookmarkDto,
  })
  @ApiBadRequestResponse({
    description: 'Credentials are not correct',
  })
  getBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookmarkService.getBookmarkById(userId, bookmarkId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update bookmark by id' })
  @ApiCreatedResponse({
    description: 'Bookmark by id has been successfully updated',
    type: CreateBookmarkDto,
  })
  @ApiBadRequestResponse({
    description: 'Credentials are not correct',
  })
  editBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
    @Body() dto: EditBookmarkDto,
  ) {
    return this.bookmarkService.editBookmarkById(userId, bookmarkId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete bookmark by id' })
  @ApiCreatedResponse({
    description: 'Bookmark by id has been successfully deleted',
    type: CreateBookmarkDto,
  })
  @ApiBadRequestResponse({
    description: 'Credentials are not correct',
  })
  deleteBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookmarkService.deleteBookmarkById(userId, bookmarkId);
  }
}
