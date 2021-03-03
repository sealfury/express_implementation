import 'reflect-metadata'
import { MetadataKeys } from './MetadataKeys'

export function reqBodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key)
  }
}
