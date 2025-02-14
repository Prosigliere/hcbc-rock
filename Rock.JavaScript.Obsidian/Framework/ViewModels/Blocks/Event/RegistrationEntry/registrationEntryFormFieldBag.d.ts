//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by the Rock.CodeGeneration project
//     Changes to this file will be lost when the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
// <copyright>
// Copyright by the Spark Development Network
//
// Licensed under the Rock Community License (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.rockrms.com/license
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// </copyright>
//

import { RegistrationFieldSource } from "@Obsidian/Enums/Event/registrationFieldSource";
import { RegistrationPersonFieldType } from "@Obsidian/Enums/Event/registrationPersonFieldType";
import { FilterExpressionType } from "@Obsidian/Enums/Reporting/filterExpressionType";
import { Guid } from "@Obsidian/Types";
import { RegistrationEntryVisibilityBag } from "@Obsidian/ViewModels/Blocks/Event/RegistrationEntry/registrationEntryVisibilityBag";
import { PublicAttributeBag } from "@Obsidian/ViewModels/Utility/publicAttributeBag";

/** RegistrationEntryBlockFormFieldViewModel */
export type RegistrationEntryFormFieldBag = {
    /** Gets or sets the attribute. */
    attribute?: PublicAttributeBag | null;

    /** Gets or sets the field source. */
    fieldSource: RegistrationFieldSource;

    /** Gets or sets the unique identifier. */
    guid: Guid;

    /** Gets or sets a value indicating whether this instance is required. */
    isRequired: boolean;

    /** Gets or sets a value indicating whether this instance is shared value. */
    isSharedValue: boolean;

    /** Gets or sets the type of the person field. */
    personFieldType: RegistrationPersonFieldType;

    /** Gets or sets the post HTML. */
    postHtml?: string | null;

    /** Gets or sets the pre HTML. */
    preHtml?: string | null;

    /** Gets or sets a value indicating whether [show on wait list]. */
    showOnWaitList: boolean;

    /** Gets or sets the visibility rules. */
    visibilityRules?: RegistrationEntryVisibilityBag[] | null;

    /** Gets or sets the type of the visibility rule. */
    visibilityRuleType: FilterExpressionType;
};
