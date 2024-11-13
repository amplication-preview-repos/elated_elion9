/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TrainingSessionWhereInput } from "./TrainingSessionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TrainingSessionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TrainingSessionWhereInput,
  })
  @ValidateNested()
  @Type(() => TrainingSessionWhereInput)
  @IsOptional()
  @Field(() => TrainingSessionWhereInput, {
    nullable: true,
  })
  every?: TrainingSessionWhereInput;

  @ApiProperty({
    required: false,
    type: () => TrainingSessionWhereInput,
  })
  @ValidateNested()
  @Type(() => TrainingSessionWhereInput)
  @IsOptional()
  @Field(() => TrainingSessionWhereInput, {
    nullable: true,
  })
  some?: TrainingSessionWhereInput;

  @ApiProperty({
    required: false,
    type: () => TrainingSessionWhereInput,
  })
  @ValidateNested()
  @Type(() => TrainingSessionWhereInput)
  @IsOptional()
  @Field(() => TrainingSessionWhereInput, {
    nullable: true,
  })
  none?: TrainingSessionWhereInput;
}
export { TrainingSessionListRelationFilter as TrainingSessionListRelationFilter };
