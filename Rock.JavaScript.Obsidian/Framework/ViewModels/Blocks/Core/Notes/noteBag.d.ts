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

/** Describes an existing note that should be displayed to the person. */
export type NoteBag = {
    /** Gets or sets the unique anchor identifier used to link to this note. */
    anchorId?: string | null;

    /** Gets or sets the attribute values. */
    attributeValues?: Record<string, string> | null;

    /** Gets or sets the caption text of the note. */
    caption?: string | null;

    /** Gets or sets the identifier of the person that created this note. */
    createdByIdKey?: string | null;

    /** Gets or sets the name of the person that created this created. */
    createdByName?: string | null;

    /** Gets or sets the photo URL of the person that created this note. */
    createdByPhotoUrl?: string | null;

    /** Gets or sets the created date time. */
    createdDateTime?: string | null;

    /** Gets or sets the name of the person that edited this note. */
    editedByName?: string | null;

    /** Gets or sets the edited date time. */
    editedDateTime?: string | null;

    /** Gets or sets the identifier of the note. */
    idKey?: string | null;

    /** Gets or sets a value indicating whether this note is an alert note. */
    isAlert: boolean;

    /** Gets or sets a value indicating whether this note is deletable. */
    isDeletable: boolean;

    /** Gets or sets a value indicating whether this note is editable. */
    isEditable: boolean;

    /** Gets or sets a value indicating whether this note should be pinned to top */
    isPinned: boolean;

    /** Gets or sets a value indicating whether this note is a private note. */
    isPrivate: boolean;

    /** Gets or sets a value indicating whether this note is currently being watched. */
    isWatching: boolean;

    /** Gets or sets the note type identifier. */
    noteTypeIdKey?: string | null;

    /** Gets or sets the parent note identifier. */
    parentNoteIdKey?: string | null;

    /** Gets or sets the text of the note. */
    text?: string | null;
};
