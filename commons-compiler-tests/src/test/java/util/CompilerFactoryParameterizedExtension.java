
/*
 * Janino - An embedded Java[TM] compiler
 *
 * Copyright (c) 2001-2010 Arno Unkrig. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the
 * following conditions are met:
 *
 *    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the
 *       following disclaimer.
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the
 *       following disclaimer in the documentation and/or other materials provided with the distribution.
 *    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote
 *       products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
 * INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

package util;

import java.util.Collections;
import java.util.List;
import java.util.stream.Stream;

import org.codehaus.commons.compiler.ICompilerFactory;
import org.junit.jupiter.api.extension.Extension;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.api.extension.ParameterContext;
import org.junit.jupiter.api.extension.ParameterResolver;
import org.junit.jupiter.api.extension.TestTemplateInvocationContext;
import org.junit.jupiter.api.extension.TestTemplateInvocationContextProvider;

/**
 * JUnit 5 extension that provides {@link TestTemplateInvocationContext}s for each available {@link ICompilerFactory}.
 * <p>
 * This replaces JUnit 4's {@code @RunWith(Parameterized.class)} pattern. Each {@code @TestTemplate} method is invoked
 * once per compiler factory, with the factory injected via the test class constructor.
 * </p>
 */
public
class CompilerFactoryParameterizedExtension implements TestTemplateInvocationContextProvider {

    @Override public boolean
    supportsTestTemplate(ExtensionContext context) { return true; }

    @Override public Stream<TestTemplateInvocationContext>
    provideTestTemplateInvocationContexts(ExtensionContext context) {
        try {
            List<ICompilerFactory> factories = TestUtil.getCompilerFactories();
            return factories.stream().map(CompilerFactoryParameterizedExtension::createContext);
        } catch (Exception e) {
            throw new RuntimeException("Failed to get compiler factories", e);
        }
    }

    private static TestTemplateInvocationContext
    createContext(final ICompilerFactory compilerFactory) {
        return new TestTemplateInvocationContext() {

            @Override public String
            getDisplayName(int invocationIndex) {
                return "[CompilerFactory=" + compilerFactory + "]";
            }

            @Override public List<Extension>
            getAdditionalExtensions() {
                return Collections.singletonList(new CompilerFactoryParameterResolver(compilerFactory));
            }
        };
    }

    private static
    class CompilerFactoryParameterResolver implements ParameterResolver {

        private final ICompilerFactory compilerFactory;

        CompilerFactoryParameterResolver(ICompilerFactory compilerFactory) {
            this.compilerFactory = compilerFactory;
        }

        @Override public boolean
        supportsParameter(ParameterContext parameterContext, ExtensionContext extensionContext) {
            return parameterContext.getParameter().getType().isAssignableFrom(ICompilerFactory.class);
        }

        @Override public Object
        resolveParameter(ParameterContext parameterContext, ExtensionContext extensionContext) {
            return this.compilerFactory;
        }
    }
}
