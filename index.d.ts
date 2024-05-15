import type {
    FlatConfigComposer,
    ResolvableFlatConfig,
} from 'eslint-flat-config-utils'
import type { NuxtESLintConfigOptions } from '@nuxt/eslint-config/flat'

declare function createConfigForNuxt(
    options?: NuxtESLintConfigOptions,
    ...userConfigs: ResolvableFlatConfig[]
): FlatConfigComposer<Linter.FlatConfig>

export { createConfigForNuxt }
