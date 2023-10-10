/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 *  Welcome to the **Polar API** for [polar.sh](https://polar.sh).  The Public API is currently a [work in progress](https://github.com/polarsource/polar/issues/834) and is in active development. 🚀  #### Authentication  Use a [Personal Access Token](https://polar.sh/settings) and send it in the `Authorization` header on the format `Bearer [YOUR_TOKEN]`.  #### Feedback  If you have any feedback or comments, reach out in the [Polar API-issue](https://github.com/polarsource/polar/issues/834), or reach out on the Polar Discord server.  We\'d love to see what you\'ve built with the API and to get your thoughts on how we can make the API better!  #### Connecting  The Polar API is online at `https://api.polar.sh`. 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  IssueExtensionRead,
  Platforms,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    IssueExtensionReadFromJSON,
    IssueExtensionReadToJSON,
    PlatformsFromJSON,
    PlatformsToJSON,
} from '../models/index';

export interface ExtensionApiListIssuesForExtensionRequest {
    platform: Platforms;
    orgName: string;
    repoName: string;
    numbers: string;
}

/**
 * 
 */
export class ExtensionApi extends runtime.BaseAPI {

    /**
     * List Issues For Extension
     */
    async listIssuesForExtensionRaw(requestParameters: ExtensionApiListIssuesForExtensionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<IssueExtensionRead>>> {
        if (requestParameters.platform === null || requestParameters.platform === undefined) {
            throw new runtime.RequiredError('platform','Required parameter requestParameters.platform was null or undefined when calling listIssuesForExtension.');
        }

        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling listIssuesForExtension.');
        }

        if (requestParameters.repoName === null || requestParameters.repoName === undefined) {
            throw new runtime.RequiredError('repoName','Required parameter requestParameters.repoName was null or undefined when calling listIssuesForExtension.');
        }

        if (requestParameters.numbers === null || requestParameters.numbers === undefined) {
            throw new runtime.RequiredError('numbers','Required parameter requestParameters.numbers was null or undefined when calling listIssuesForExtension.');
        }

        const queryParameters: any = {};

        if (requestParameters.numbers !== undefined) {
            queryParameters['numbers'] = requestParameters.numbers;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/extension/{platform}/{org_name}/{repo_name}/issues`.replace(`{${"platform"}}`, encodeURIComponent(String(requestParameters.platform))).replace(`{${"org_name"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"repo_name"}}`, encodeURIComponent(String(requestParameters.repoName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(IssueExtensionReadFromJSON));
    }

    /**
     * List Issues For Extension
     */
    async listIssuesForExtension(requestParameters: ExtensionApiListIssuesForExtensionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<IssueExtensionRead>> {
        const response = await this.listIssuesForExtensionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}