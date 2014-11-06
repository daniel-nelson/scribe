define([
  './api/command-patch',
  './api/command',
  './api/node',
  './api/element',
  './api/selection',
  './api/simple-command'
], function (
  buildCommandPatch,
  buildCommand,
  Node,
  Element,
  buildSelection,
  buildSimpleCommand
) {

  'use strict';

  return function Api(scribe) {
    this.CommandPatch = buildCommandPatch(scribe);
    this.Command = buildCommand(scribe);
    this.Node = Node;
    this.Element = Element;
    this.Selection = buildSelection(scribe);
    this.SimpleCommand = buildSimpleCommand(this, scribe);
  };
});
