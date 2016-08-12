/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	config.skin = 'twine-v2';
    config.extraPlugins = 'oembed,autogrow,indent';
    config.insertpre_style = 'background-color:#F8F8F8;border:1px solid #EAEAEA;padding:12px;';
    config.autoGrow_minHeight = 200;
    config.autoGrow_maxHeight = 600;
    config.autoGrow_onStartup = true;
    config.autoGrow_bottomSpace = 10;
    config.removePlugins = 'elementspath,resize';
    config.disableNativeSpellChecker = false;
    config.resize_enabled = false;
    config.contentsCss = '/../../styles/main.min.css';
    config.toolbar = [[ 'Bold','Italic','Underline'],['Format'],[ 'NumberedList','BulletedList'],['Undo', 'Redo'],['Image'],['Link','Unlink'],['Maximize'],['Source']]
};
