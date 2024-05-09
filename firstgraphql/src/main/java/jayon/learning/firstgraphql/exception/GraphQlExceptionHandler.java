package jayon.learning.firstgraphql.exception;

import java.util.List;

import org.springframework.graphql.execution.DataFetcherExceptionResolverAdapter;
import org.springframework.stereotype.Component;

import graphql.ErrorClassification;
import graphql.GraphQLError;
import graphql.language.SourceLocation;
import graphql.schema.DataFetchingEnvironment;

@Component
public class GraphQlExceptionHandler extends DataFetcherExceptionResolverAdapter {

    @Override
    public GraphQLError resolveToSingleError(Throwable exception, DataFetchingEnvironment env) {
        return new GraphQLError() {
            @Override
            public String getMessage() {
                return exception.getMessage();
            }

            @Override
            public List<SourceLocation> getLocations() {
                // return List.of(env.getField().getSourceLocation());
                return null;    
            }

            @Override
            public ErrorClassification getErrorType() {
                return ErrorClassification.errorClassification(exception.getClass().getName());
            }
        };
    }
}
